var datagenerator = require("./Spindle_datagenerator")

module.exports = {
  Spindle_instance: function(array,MillingMachine1,data_matrix) {
    var Spindle_obj = array[4];

    var Spindle_comp = Spindle_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Spindle"
    });
    datagenerator.Spindle_datagenerator(Spindle_comp,data_matrix);
    }
}
