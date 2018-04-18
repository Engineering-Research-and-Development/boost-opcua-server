module.exports = {
  Axis_Y_obj: function(server,addressSpace, MillingMachineType) {

    var Axis_Y_obj = addressSpace.addObjectType({
      browseName: "Axis_Y",
      subtypeOf: MillingMachineType
    });

    var Axis_Y_pos = addressSpace.addVariable({
      componentOf: Axis_Y_obj,
      browseName: "Axis_Y_pos",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var Axis_Y_load = addressSpace.addVariable({
      componentOf: Axis_Y_obj,
      browseName: "Axis_Y_load",
      dataType: "Number",
      modellingRule: "Mandatory"
    });
    return Axis_Y_obj;
  }
}
