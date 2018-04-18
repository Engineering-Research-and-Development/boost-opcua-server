var datagenerator = require("./Axis_Y_datagenerator")
module.exports = {
  Axis_Y_instance: function(array,MillingMachine1,data_matrix) {
    var Axis_Y_obj = array[13];

    var Axis_Y_comp = Axis_Y_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Axis_Y"
    });

    datagenerator.Axis_Y_datagenerator(Axis_Y_comp,data_matrix);
    }
}
