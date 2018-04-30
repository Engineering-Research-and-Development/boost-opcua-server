var opcua = require("node-opcua");

module.exports = {
  Drive_datagenerator: function(Drive_comp,data_matrix,read_timeout) {

      var temp_drive_state = 1;
      var temp_drive_tol = 1;
      var temp_drive_state_react = 1;

      setInterval(function(){

        if(temp_drive_state == data_matrix[94].length){
          temp_drive_state = 1;
        }
        if(temp_drive_tol == data_matrix[95].length){
          temp_drive_tol = 1;
        }
        if(temp_drive_state_react == data_matrix[96].length){
          temp_drive_state_react = 1;
        }

        var set_drive_state = data_matrix[94][temp_drive_state];
        var set_drive_tol = data_matrix[95][temp_drive_tol];
        var set_drive_state_react = data_matrix[96][temp_drive_state_react];

        temp_drive_state+=1;
        temp_drive_tol+=1;
        temp_drive_state_react+=1;

        Drive_comp.drive_state.setValueFromSource({dataType:opcua.DataType.Float, value: set_drive_state});
        Drive_comp.drive_tol.setValueFromSource({dataType:opcua.DataType.Float, value: set_drive_tol});
        Drive_comp.drive_state_react.setValueFromSource({dataType:opcua.DataType.Float, value: set_drive_state_react});
      }, read_timeout);

  }
}
