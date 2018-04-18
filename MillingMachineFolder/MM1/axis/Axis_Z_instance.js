var datagenerator = require("./Axis_Z_datagenerator")
module.exports = {
  Axis_Z_instance: function(array,MillingMachine1,data_matrix) {
    var Axis_Z_obj = array[14];

    var Axis_Z_comp = Axis_Z_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Axis_Z"
    });

    datagenerator.Axis_Z_datagenerator(Axis_Z_comp,data_matrix);
    }
}
