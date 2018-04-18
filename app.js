#!/usr/bin/env node
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');
var path = require("path");
var _ = require("underscore");
var opcua = require("node-opcua");
var Type = require("./MillingMachineType/MillingMachineType");
var Item = require("./MillingMachineFolder/MM1/MillingMachineItem1");
var yargs = require("yargs/yargs");

var argv = yargs(process.argv)
    .wrap(132)
    .demand("security")
    .string("security")
    .describe("security", "enable security ")
    .alias("se", "security")
    .example("app --se=true")
    .example("app --se=false")
    .argv;
    
var data_matrix = null;
var csvData=[];
var data = [];

function create_datamatrix(callback) {
  fs.createReadStream("./data_input/test.csv")
  .pipe(parse({delimiter: ';'}))
  .on('data', function(csvrow) {
    csvData.push(csvrow);
  })
  .on('end',function() {
    for (i=0; i<=csvData[0].length-1; i++){
      var p = [];
      for (j=0; j<=csvData.length-1; j++){
        p.push(csvData[j][i]);
      }
      data.push(p);
    }
    data_matrix = data;
    return callback();
  });
}

const SecurityPolicy = opcua.SecurityPolicy;
const MessageSecurityMode = opcua.MessageSecurityMode;

function constructFilename(filename) {
    return path.join(__dirname, "./", filename);
}

var userManager = {
    isValidUser: function (userName, password) {
        if (userName === "user1" && password === "password1") {
            return true;
        }
        if (userName === "user2" && password === "password2") {
            return true;
        }
        return false;
    }
};

var server_certificate_file = constructFilename("certificates/server_cert_2048.pem");
var server_certificate_privatekey_file = constructFilename("certificates/server_key_2048.pem");
var enable_security = String(argv.security);
// Let's create an instance of OPCUAServer
if (enable_security == 'true') {

  var server = new opcua.OPCUAServer({
    port: 4334, // the port of the listening socket of the server
    resourcePath: "UA/MillingMachine", // this path will be added to the endpoint resource name

      securityPolicies: [
          SecurityPolicy.Basic128Rsa15,
          SecurityPolicy.Basic256
      ],
      securityModes: [
          MessageSecurityMode.SIGN,
          MessageSecurityMode.SIGNANDENCRYPT
      ],
      certificateFile: server_certificate_file,
      privateKeyFile: server_certificate_privatekey_file,
      allowAnonymous : false,
      userManager: userManager,

    buildInfo : {
      productName: "MillingMachineServer",
      buildNumber: "1",
      buildDate: new Date(2018,4,10)
    }
  });
}
if (enable_security == 'false') {

  var server = new opcua.OPCUAServer({
    port: 4334, // the port of the listening socket of the server
    resourcePath: "UA/MillingMachine", // this path will be added to the endpoint resource name

    buildInfo : {
      productName: "MillingMachineServer",
      buildNumber: "1",
      buildDate: new Date(2018,4,10)
    }
  });
}

function post_initialize() {
  console.log("initialized");
  async.series([
    function(callback) {
      create_datamatrix(callback);
    },
    function(callback) {
      var MMobjtype = Type.construct_MillingMachineType(server);
      Item.MillingMachineItem(MMobjtype,data_matrix);
    }

  ]);

  server.start(function() {
    console.log("Server is now listening ... ( press CTRL+C to stop)");
    console.log("port ", server.endpoints[0].port);
    var endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
    console.log(" the primary server endpoint url is ", endpointUrl );
  });
}
server.initialize(post_initialize);
