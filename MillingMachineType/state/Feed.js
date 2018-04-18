module.exports = {
  Feed_obj: function(server,addressSpace, MillingMachineType) {

    var Feed_obj = addressSpace.addObjectType({
      browseName: "Feed",
      subtypeOf: MillingMachineType
    });

    var feed = addressSpace.addVariable({
      componentOf: Feed_obj,
      browseName: "feed",
      dataType: "Float",
      modellingRule: "Mandatory"
    });

    var override_feed = addressSpace.addVariable({
      componentOf: Feed_obj,
      browseName: "override_feed",
      dataType: "Number",
      modellingRule: "Mandatory"
    });
    return Feed_obj;
  }
}
