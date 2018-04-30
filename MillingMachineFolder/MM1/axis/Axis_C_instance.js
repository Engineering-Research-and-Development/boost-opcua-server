var datagenerator = require("./Axis_C_datagenerator")
module.exports = {
  Axis_C_instance: function(array,MillingMachine1,data_matrix,read_timeout) {
    var Axis_C_obj = array[16];

    var Axis_C_comp = Axis_C_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Axis_C"
    });

    datagenerator.Axis_C_datagenerator(Axis_C_comp,data_matrix,read_timeout);
    }
}
