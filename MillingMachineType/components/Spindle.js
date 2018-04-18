module.exports = {
  Spindle_obj: function(server,addressSpace, MillingMachineType) {

    var Spindle_obj = addressSpace.addObjectType({
      browseName: "Spindle",
      subtypeOf: MillingMachineType
    });

    var spindle_brg_temp = addressSpace.addVariable({
      componentOf: Spindle_obj,
      browseName: "spindle_brg_temp",
      dataType: "Float",
      modellingRule: "Mandatory"
    });

    var spindle_vib = addressSpace.addVariable({
      componentOf: Spindle_obj,
      browseName: "spindle_vib",
      dataType: "Float",
      modellingRule: "Mandatory"
    });

    var spindle_load = addressSpace.addVariable({
      componentOf: Spindle_obj,
      browseName: "spindle_load",
      dataType: "Float",
      modellingRule: "Mandatory"
    });

    return Spindle_obj;
  }
}
