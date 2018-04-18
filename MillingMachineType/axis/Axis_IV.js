module.exports = {
  Axis_IV_obj: function(server,addressSpace, MillingMachineType) {

    var Axis_IV_obj = addressSpace.addObjectType({
      browseName: "Axis_IV",
      subtypeOf: MillingMachineType
    });

    var Axis_IV_pos = addressSpace.addVariable({
      componentOf: Axis_IV_obj,
      browseName: "Axis_IV_pos",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var Axis_IV_load = addressSpace.addVariable({
      componentOf: Axis_IV_obj,
      browseName: "Axis_IV_load",
      dataType: "Number",
      modellingRule: "Mandatory"
    });
    return Axis_IV_obj;
  }
}
