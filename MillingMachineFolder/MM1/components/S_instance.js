var datagenerator = require("./S_datagenerator")

module.exports = {
  S_instance: function(array,MillingMachine1,data_matrix,read_timeout) {
    var S_obj = array[3];

    var S_comp = S_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "S_obj"
    });
    datagenerator.S_datagenerator(S_comp,data_matrix,read_timeout);
    }
}
