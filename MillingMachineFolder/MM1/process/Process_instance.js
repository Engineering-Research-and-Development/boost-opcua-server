var datagenerator = require("./Process_datagenerator")

module.exports = {
  Process_instance: function(array,MillingMachine1,data_matrix,read_timeout) {
    var Process_obj = array[7];

    var Process_comp = Process_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Process"
    });
    datagenerator.Process_datagenerator(Process_comp,data_matrix,read_timeout);
    }
}
