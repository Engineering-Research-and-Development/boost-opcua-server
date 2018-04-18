var datagenerator = require("./Axis_X_datagenerator")
module.exports = {
  Axis_X_instance: function(array,MillingMachine1,data_matrix) {
    var Axis_X_obj = array[12];

    var Axis_X_comp = Axis_X_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Axis_X"
    });
    datagenerator.Axis_X_datagenerator(Axis_X_comp,data_matrix);
    }
}
