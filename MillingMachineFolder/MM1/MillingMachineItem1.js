var Axis_X_inst = require("./axis/Axis_X_instance");
var Axis_Y_inst = require("./axis/Axis_Y_instance");
var Axis_Z_inst = require("./axis/Axis_Z_instance");
var Axis_IV_inst = require("./axis/Axis_IV_instance");
var Axis_C_inst = require("./axis/Axis_C_instance");
var Flange_inst = require("./components/Flange_instance");
var Motor_inst = require("./components/Motor_instance");
var S_inst = require("./components/S_instance");
var Spindle_inst = require("./components/Spindle_instance");
var Process_inst = require("./process/Process_instance");
var Drive_inst = require("./state/Drive_instance");
var Env_inst = require("./state/Env_instance");
var Feed_inst = require("./state/Feed_instance");
var Module_inst = require("./state/Module_instance");
var Mms_inst = require("./MillingMachineSettings_instance");

module.exports = {
  MillingMachineItem: function(array,data_matrix) {

    var addressSpace = array[0].engine.addressSpace;
    var objectsfolder = addressSpace.rootFolder.objects;
    var MillingMachineType = array[1];

    var MillingMachineFolder = addressSpace.addFolder( objectsfolder,{
            browseName: "MillingMachines"

    });

    var MillingMachine1 = MillingMachineType.instantiate({
      organizedBy: objectsfolder.millingMachines,
      browseName: "MillingMachine#1"
    });

    Axis_X_inst.Axis_X_instance(array,MillingMachine1,data_matrix);
    Axis_Y_inst.Axis_Y_instance(array,MillingMachine1,data_matrix);
    Axis_Z_inst.Axis_Z_instance(array,MillingMachine1,data_matrix);
    Axis_IV_inst.Axis_IV_instance(array,MillingMachine1,data_matrix);
    Axis_C_inst.Axis_C_instance(array,MillingMachine1,data_matrix);
    Flange_inst.Flange_instance(array,MillingMachine1,data_matrix);
    Motor_inst.Motor_instance(array,MillingMachine1,data_matrix);
    S_inst.S_instance(array,MillingMachine1,data_matrix);
    Spindle_inst.Spindle_instance(array,MillingMachine1,data_matrix);
    Process_inst.Process_instance(array,MillingMachine1,data_matrix);
    Drive_inst.Drive_instance(array,MillingMachine1,data_matrix);
    Env_inst.Env_instance(array,MillingMachine1,data_matrix);
    Feed_inst.Feed_instance(array,MillingMachine1,data_matrix);
    Module_inst.Module_instance(array,MillingMachine1,data_matrix);
    Mms_inst.Mms_instance(array,MillingMachine1,data_matrix);
  }
}
