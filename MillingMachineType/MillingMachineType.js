var opcua = require("node-opcua");
var S_obj = require("./components/S");
var Motor_obj = require("./components/Motor");
var Spindle_obj = require("./components/Spindle");
var Flange_obj = require("./components/Flange");
var Process_obj = require("./process/Process");
var Feed_obj = require("./state/Feed");
var Env_obj = require("./state/Env");
var Drive_obj = require("./state/Drive");
var Module_obj = require("./state/Module");
var Axis_X_obj = require("./axis/Axis_X");
var Axis_Y_obj = require("./axis/Axis_Y");
var Axis_Z_obj = require("./axis/Axis_Z");
var Axis_IV_obj = require("./axis/Axis_IV");
var Axis_C_obj = require("./axis/Axis_C");
var MillingMachine_settings = require("./MillingMachineSettings");
var exports = module.exports = {};

exports.construct_MillingMachineType = function(server) {

    var addressSpace = server.engine.addressSpace;

    var MillingMachineType = addressSpace.addObjectType({
      browseName: "MillingMachineType"
    })

    return [server,
            MillingMachineType,
            MillingMachine_settings.MillingMachine_settings(server,addressSpace, MillingMachineType),
            S_obj.S_obj(server,addressSpace, MillingMachineType),
            Spindle_obj.Spindle_obj(server,addressSpace, MillingMachineType),
            Motor_obj.Motor_obj(server,addressSpace, MillingMachineType),
            Flange_obj.Flange_obj(server,addressSpace, MillingMachineType),
            Process_obj.Process_obj(server,addressSpace, MillingMachineType),
            Drive_obj.Drive_obj(server,addressSpace, MillingMachineType),
            Env_obj.Env_obj(server,addressSpace, MillingMachineType),
            Feed_obj.Feed_obj(server,addressSpace, MillingMachineType),
            Module_obj.Module_obj(server,addressSpace, MillingMachineType),
            Axis_X_obj.Axis_X_obj(server,addressSpace, MillingMachineType),
            Axis_Y_obj.Axis_Y_obj(server,addressSpace, MillingMachineType),
            Axis_Z_obj.Axis_Z_obj(server,addressSpace, MillingMachineType),
            Axis_IV_obj.Axis_IV_obj(server,addressSpace, MillingMachineType),
            Axis_C_obj.Axis_C_obj(server,addressSpace, MillingMachineType)
          ];
}
