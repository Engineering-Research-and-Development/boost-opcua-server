var opcua = require("node-opcua");

module.exports = {
  S_datagenerator: function(S_comp,data_matrix) {

      var temp_S = 1;
      var temp_S_act = 1;
      var temp_override_S = 1;

      setInterval(function(){

        if(temp_S == data_matrix[6].length){
          temp_S = 1;
        }
        if(temp_S_act == data_matrix[7].length){
          temp_S_act = 1;
        }
        if(temp_override_S == data_matrix[15].length){
          temp_override_S = 1;
        }

        var set_S = data_matrix[6][temp_S];
        var set_S_act = data_matrix[7][temp_S_act];
        var set_override_S = data_matrix[15][temp_override_S];

        temp_S+=1;
        temp_S_act+=1;
        temp_override_S+=1;

        S_comp.s.setValueFromSource({dataType:opcua.DataType.Double, value: set_S});
        S_comp.s_act.setValueFromSource({dataType:opcua.DataType.Double, value: set_S_act});
        S_comp.override_S.setValueFromSource({dataType:opcua.DataType.Double, value: set_override_S});
      }, 1000);

  }
}
