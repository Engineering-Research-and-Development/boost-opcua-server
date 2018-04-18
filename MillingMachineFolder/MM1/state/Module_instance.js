var datagenerator = require("./Module_datagenerator")

module.exports = {
  Module_instance: function(array,MillingMachine1,data_matrix) {
    var Module_obj = array[11];

    var Module_comp = Module_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Module"
    });

    datagenerator.Module_datagenerator(Module_comp,data_matrix);
    }
}
