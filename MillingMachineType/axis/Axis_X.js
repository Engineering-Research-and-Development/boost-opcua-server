module.exports = {
  Axis_X_obj: function(server,addressSpace, MillingMachineType) {

    var Axis_X_obj = addressSpace.addObjectType({
      browseName: "Axis_X",
      subtypeOf: MillingMachineType
    });

    var Axis_X_pos = addressSpace.addVariable({
      componentOf: Axis_X_obj,
      browseName: "Axis_X_pos",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var Axis_X_load = addressSpace.addVariable({
      componentOf: Axis_X_obj,
      browseName: "Axis_X_load",
      dataType: "Number",
      modellingRule: "Mandatory"
    });
    return Axis_X_obj;
  }
}
