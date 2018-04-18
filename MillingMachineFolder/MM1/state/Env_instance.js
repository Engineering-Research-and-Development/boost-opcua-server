var datagenerator = require("./Env_datagenerator")

module.exports = {
  Env_instance: function(array,MillingMachine1,data_matrix) {
    var Env_obj = array[9];

    var Env_comp = Env_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Env"
    });

    datagenerator.Env_datagenerator(Env_comp,data_matrix);
    }
}
