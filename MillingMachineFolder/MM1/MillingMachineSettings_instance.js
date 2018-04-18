var datagenerator = require("./MillingMachineSettings_datagenerator")
module.exports = {
  Mms_instance: function(array,MillingMachine1,data_matrix) {
    var Settings_obj = array[2];

    var Settings_comp = Settings_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Settings"
    });
    datagenerator.Mms_datagenerator(Settings_comp,data_matrix);
    }
}
