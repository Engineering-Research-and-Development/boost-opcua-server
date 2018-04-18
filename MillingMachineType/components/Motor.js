module.exports = {
  Motor_obj: function(server,addressSpace, MillingMachineType) {

    var Motor_obj = addressSpace.addObjectType({
      browseName: "Motor",
      subtypeOf: MillingMachineType
    });

    var motor_temp = addressSpace.addVariable({
      componentOf: Motor_obj,
      browseName: "motor_temp",
      dataType: "Float",
      modellingRule: "Mandatory"
    });
    return Motor_obj;
  }
}
