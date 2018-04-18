module.exports = {
  Axis_C_obj: function(server,addressSpace, MillingMachineType) {

    var Axis_C_obj = addressSpace.addObjectType({
      browseName: "Axis_C",
      subtypeOf: MillingMachineType
    });

    var Axis_C_pos = addressSpace.addVariable({
      componentOf: Axis_C_obj,
      browseName: "Axis_C_pos",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var Axis_C_load = addressSpace.addVariable({
      componentOf: Axis_C_obj,
      browseName: "Axis_C_load",
      dataType: "Number",
      modellingRule: "Mandatory"
    });
    return Axis_C_obj;
  }
}
