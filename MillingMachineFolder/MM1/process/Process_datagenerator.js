var opcua = require("node-opcua");

module.exports = {
  Process_datagenerator: function(Process_comp,data_matrix) {

      var temp_process_vib = 1;
      var temp_process_state = 1;

      setInterval(function(){

        if(temp_process_vib == data_matrix[63].length){
          temp_process_vib = 1;
        }
        if(temp_process_state == data_matrix[91].length){
          temp_process_state = 1;
        }

        var set_process_vib = data_matrix[63][temp_process_vib];
        var set_process_state = data_matrix[91][temp_process_state];

        temp_process_vib+=1;
        temp_process_state+=1;

        Process_comp.process_vib.setValueFromSource({dataType:opcua.DataType.Double, value: set_process_vib});
        Process_comp.process_state.setValueFromSource({dataType:opcua.DataType.Double, value: set_process_state});
      }, 1000);

  }
}
