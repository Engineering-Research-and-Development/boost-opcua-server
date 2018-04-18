module.exports = {
  Module_obj: function(server,addressSpace, MillingMachineType) {

    var Module_obj = addressSpace.addObjectType({
      browseName: "Module",
      subtypeOf: MillingMachineType
    });

    var module_1_state = addressSpace.addVariable({
      componentOf: Module_obj,
      browseName: "Module_1_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var module_2_state = addressSpace.addVariable({
      componentOf: Module_obj,
      browseName: "Module_2_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var module_3_state = addressSpace.addVariable({
      componentOf: Module_obj,
      browseName: "Module_3_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var module_4_state = addressSpace.addVariable({
      componentOf: Module_obj,
      browseName: "Module_4_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var module_5_state = addressSpace.addVariable({
      componentOf: Module_obj,
      browseName: "Module_5_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var module_6state = addressSpace.addVariable({
      componentOf: Module_obj,
      browseName: "Module_6_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var module_7_state = addressSpace.addVariable({
      componentOf: Module_obj,
      browseName: "Module_7_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var module_8_state = addressSpace.addVariable({
      componentOf: Module_obj,
      browseName: "Module_8_state",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    return Module_obj;

  }
}
