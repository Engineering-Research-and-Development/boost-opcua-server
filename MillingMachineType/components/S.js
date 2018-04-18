module.exports = {
  S_obj: function(server,addressSpace, MillingMachineType) {

    var S_obj = addressSpace.addObjectType({
        browseName: "S_obj",
        subtypeOf: MillingMachineType
      });

    var S = addressSpace.addVariable({
        componentOf: S_obj,
        browseName: "S",
        dataType: "Number",
        modellingRule: "Mandatory"
      });

      var S_act = addressSpace.addVariable({
          componentOf: S_obj,
          browseName: "S_act",
          dataType: "Float",
          modellingRule: "Mandatory"
        });

      var override_S = addressSpace.addVariable({
          componentOf: S_obj,
          browseName: "override_S",
          dataType: "Number",
          modellingRule: "Mandatory"
        });
        return S_obj;
      }

}
