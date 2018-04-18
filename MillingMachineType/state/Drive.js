module.exports = {
  Drive_obj: function(server,addressSpace, MillingMachineType) {

    var Drive_obj = addressSpace.addObjectType({
      browseName: "Drive",
      subtypeOf: MillingMachineType
    });

    var drive_state = addressSpace.addVariable({
      componentOf: Drive_obj,
      browseName: "drive_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var drive_tol = addressSpace.addVariable({
      componentOf: Drive_obj,
      browseName: "drive_tol",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var drive_state_react = addressSpace.addVariable({
      componentOf: Drive_obj,
      browseName: "drive_state_react",
      dataType: "Number",
      modellingRule: "Mandatory"
    });
    return Drive_obj;
  }
}
