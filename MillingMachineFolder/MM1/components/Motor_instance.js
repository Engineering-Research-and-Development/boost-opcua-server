
var datagenerator = require("./Motor_datagenerator")
module.exports = {
  Motor_instance: function(array,MillingMachine1,data_matrix,read_timeout) {
    var Motor_obj = array[5];

    var Motor_comp = Motor_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Motor"
    });
    datagenerator.Motor_datagenerator(Motor_comp,data_matrix,read_timeout);
    }
}
