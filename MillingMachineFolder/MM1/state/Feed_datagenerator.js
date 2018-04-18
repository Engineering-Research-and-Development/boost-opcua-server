var opcua = require("node-opcua");

module.exports = {
  Feed_datagenerator: function(Feed_comp,data_matrix) {

      var temp_feed = 1;
      var temp_override_feed = 1;

      setInterval(function(){

        if(temp_feed == data_matrix[11].length){
          temp_feed = 1;
        }
        if(temp_override_feed == data_matrix[19].length){
          temp_override_feed = 1;
        }

        var set_feed = data_matrix[11][temp_feed];
        var set_override_feed = data_matrix[19][temp_override_feed];

        temp_feed+=1;
        temp_override_feed+=1;

        Feed_comp.feed.setValueFromSource({dataType:opcua.DataType.Float, value: set_feed});
        Feed_comp.override_feed.setValueFromSource({dataType:opcua.DataType.Float, value: set_override_feed});
      }, 1000);

  }
}
