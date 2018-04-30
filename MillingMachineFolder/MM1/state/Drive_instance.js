var datagenerator = require("./Drive_datagenerator")

module.exports = {
  Drive_instance: function(array,MillingMachine1,data_matrix,read_timeout) {
    var Drive_obj = array[8];

    var Drive_comp = Drive_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Drive"
    });
    datagenerator.Drive_datagenerator(Drive_comp,data_matrix,read_timeout);
    }
}
