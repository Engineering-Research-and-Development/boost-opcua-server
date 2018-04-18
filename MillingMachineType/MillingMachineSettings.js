module.exports = {
  MillingMachine_settings: function(server,addressSpace, MillingMachineType) {

    var Settings = addressSpace.addObjectType({
        browseName: "Settings",
        subtypeOf: MillingMachineType
      });

    var operation = addressSpace.addVariable({
      componentOf: Settings,
      browseName: "operation",
      dataType: "String",
      modellingRule: "Mandatory"
    });

    var tool = addressSpace.addVariable({
      componentOf: Settings,
      browseName: "tool",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var mach_pgm = addressSpace.addVariable({
      componentOf: Settings,
      browseName: "mach_pgm",
      dataType: "String",
      modellingRule: "Mandatory"
    });

    var N_line = addressSpace.addVariable({
      componentOf: Settings,
      browseName: "N_line",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var nb_repet = addressSpace.addVariable({
      componentOf: Settings,
      browseName: "nb_repet",
      dataType: "Number",
      modellingRule: "Mandatory"
    });

    var machine_msg = addressSpace.addVariable({
      componentOf: Settings,
      browseName: "machine_msg",
      dataType: "String",
      modellingRule: "Mandatory"
    });

    return Settings;
  }
}
