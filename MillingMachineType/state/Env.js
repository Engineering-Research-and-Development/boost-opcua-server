module.exports = {
  Env_obj: function(server,addressSpace, MillingMachineType) {

    var Env_obj = addressSpace.addObjectType({
      browseName: "Env",
      subtypeOf: MillingMachineType
    });

    var env_temp = addressSpace.addVariable({
      componentOf: Env_obj,
      browseName: "env_temp",
      dataType: "Float",
      modellingRule: "Mandatory"
    });
    return Env_obj;
  }
}
