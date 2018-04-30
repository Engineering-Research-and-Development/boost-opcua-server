var opcua = require("node-opcua");

module.exports = {
  Env_datagenerator: function(Env_comp,data_matrix,read_timeout) {

      var temp_env_temp = 1;

      setInterval(function(){

        if(temp_env_temp == data_matrix[43].length){
          temp_env_temp = 1;
        }

        var set_env_temp = data_matrix[43][temp_env_temp];

        temp_env_temp+=1;

        Env_comp.env_temp.setValueFromSource({dataType:opcua.DataType.Float, value: set_env_temp});
      },read_timeout);

  }
}
