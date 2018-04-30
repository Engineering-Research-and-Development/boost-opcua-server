var opcua = require("node-opcua");

module.exports = {
  Flange_datagenerator: function(Flange_comp,data_matrix,read_timeout) {

      var flange_temp = 1;

      setInterval(function(){

        if(flange_temp == data_matrix[51].length){
          flange_temp = 1;
        }

        var setflange_temp = data_matrix[51][flange_temp];

        flange_temp+=1;

        Flange_comp.flange_temp.setValueFromSource({dataType:opcua.DataType.Double, value: setflange_temp});
      }, read_timeout);

  }
}
