module.exports = {
  Process_obj: function(server,addressSpace, MillingMachineType) {

    var Process_obj = addressSpace.addObjectType({
      browseName: "Process",
      subtypeOf: MillingMachineType
    });

    var process_vib = addressSpace.addVariable({
      componentOf: Process_obj,
      browseName: "process_vib",
      dataType: "Float",
      modellingRule: "Mandatory"
    });

    var process_state = addressSpace.addVariable({
      componentOf: Process_obj,
      browseName: "process_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    return Process_obj;
  }
}
