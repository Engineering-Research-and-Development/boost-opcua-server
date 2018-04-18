module.exports = {
  Flange_obj: function(server,addressSpace, MillingMachineType) {

    var Flange_obj = addressSpace.addObjectType({
      browseName: "Flange",
      subtypeOf: MillingMachineType
    });

    var flange_temp = addressSpace.addVariable({
      componentOf: Flange_obj,
      browseName: "flange_temp",
      dataType: "Float",
      modellingRule: "Mandatory"
    });

    return Flange_obj;

  }
}
