var opcua = require("node-opcua");

module.exports = {
  Module_datagenerator: function(Module_comp,data_matrix) {

      var temp_module_1_state = 1;
      var temp_module_2_state = 1;
      var temp_module_3_state = 1;
      var temp_module_4_state = 1;
      var temp_module_5_state = 1;
      var temp_module_6_state = 1;
      var temp_module_7_state = 1;
      var temp_module_8_state = 1;

      setInterval(function(){

        if(temp_module_1_state == data_matrix[97].length){
          temp_module_1_state = 1;
        }
        if(temp_module_2_state == data_matrix[98].length){
          temp_module_2_state = 1;
        }
        if(temp_module_3_state == data_matrix[99].length){
          temp_module_3_state = 1;
        }
        if(temp_module_4_state == data_matrix[100].length){
          temp_module_4_state = 1;
        }
        if(temp_module_5_state == data_matrix[101].length){
          temp_module_5_state = 1;
        }
        if(temp_module_6_state == data_matrix[102].length){
          temp_module_6_state = 1;
        }
        if(temp_module_7_state == data_matrix[103].length){
          temp_module_7_state = 1;
        }
        if(temp_module_8_state == data_matrix[104].length){
          temp_module_8_state = 1;
        }

        var set_module_1_state = data_matrix[97][temp_module_1_state];
        var set_module_2_state = data_matrix[98][temp_module_2_state];
        var set_module_3_state = data_matrix[99][temp_module_3_state];
        var set_module_4_state = data_matrix[100][temp_module_4_state];
        var set_module_5_state = data_matrix[101][temp_module_5_state];
        var set_module_6_state = data_matrix[102][temp_module_6_state];
        var set_module_7_state = data_matrix[103][temp_module_7_state];
        var set_module_8_state = data_matrix[104][temp_module_8_state];

        temp_module_1_state+=1;
        temp_module_2_state+=1;
        temp_module_3_state+=1;
        temp_module_4_state+=1;
        temp_module_5_state+=1;
        temp_module_6_state+=1;
        temp_module_7_state+=1;
        temp_module_8_state+=1;

        Module_comp.module_1_state.setValueFromSource({dataType:opcua.DataType.Float, value: set_module_1_state});
        Module_comp.module_2_state.setValueFromSource({dataType:opcua.DataType.Float, value: set_module_2_state});
        Module_comp.module_3_state.setValueFromSource({dataType:opcua.DataType.Float, value: set_module_3_state});
        Module_comp.module_4_state.setValueFromSource({dataType:opcua.DataType.Float, value: set_module_4_state});
        Module_comp.module_5_state.setValueFromSource({dataType:opcua.DataType.Float, value: set_module_5_state});
        Module_comp.module_6_state.setValueFromSource({dataType:opcua.DataType.Float, value: set_module_6_state});
        Module_comp.module_7_state.setValueFromSource({dataType:opcua.DataType.Float, value: set_module_7_state});
        Module_comp.module_8_state.setValueFromSource({dataType:opcua.DataType.Float, value: set_module_8_state});

      }, 1000);

  }
}
