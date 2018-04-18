var datagenerator = require("./Feed_datagenerator")

module.exports = {
  Feed_instance: function(array,MillingMachine1,data_matrix) {
    var Feed_obj = array[10];

    var Feed_comp = Feed_obj.instantiate({
      componentOf: MillingMachine1,
      browseName: "Feed"
    });

    datagenerator.Feed_datagenerator(Feed_comp, data_matrix);
    }
}
