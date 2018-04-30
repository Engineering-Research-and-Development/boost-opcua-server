var datagenerator = require("./Axis_IV_datagenerator")
module.exports = {
  Axis_IV_instance: function(array,MillingMachine1,data_matrix,read_timeout) {
    var Axis_IV_obj = array[15];

    var Axis_IV_comp = Axis_IV_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Axis_IV"
    });
    datagenerator.Axis_IV_datagenerator(Axis_IV_comp,data_matrix,read_timeout);
    }
}
