module.exports = {
  Axis_Z_obj: function(server,addressSpace, MillingMachineType) {

    var Axis_Z_obj = addressSpace.addObjectType({
      browseName: "Axis_Z",
      subtypeOf: MillingMachineType
    });

    var Axis_Z_pos = addressSpace.addVariable({
      componentOf: Axis_Z_obj,
      browseName: "Axis_Z_pos",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var Axis_Z_load = addressSpace.addVariable({
      componentOf: Axis_Z_obj,
      browseName: "Axis_Z_load",
      dataType: "Number",
      modellingRule: "Mandatory"
    });
    return Axis_Z_obj;
  }
}
