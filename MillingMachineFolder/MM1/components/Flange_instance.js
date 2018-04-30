var datagenerator = require("./Flange_datagenerator")

module.exports = {
  Flange_instance: function(array,MillingMachine1,data_matrix,read_timeout) {
    var Flange_obj = array[6];

    var Flange_comp = Flange_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Flange"
    });
    datagenerator.Flange_datagenerator(Flange_comp,data_matrix,read_timeout);
    }
}
