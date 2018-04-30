var opcua = require("node-opcua");

module.exports = {
  Spindle_datagenerator: function(Spindle_comp,data_matrix,read_timeout) {

      var temp_Spindle_brg_temp = 1;
      var temp_Spindle_vib = 1;
      var temp_Spindle_load = 1;

      setInterval(function(){

        if(temp_Spindle_brg_temp == data_matrix[47].length){
          temp_Spindle_brg_temp = 1;
        }
        if(temp_Spindle_vib == data_matrix[59].length){
          temp_Spindle_vib = 1;
        }
        if(temp_Spindle_load == data_matrix[67].length){
          temp_Spindle_load = 1;
        }

        var set_Spindle_brg_temp = data_matrix[47][temp_Spindle_brg_temp];
        var set_Spindle_vib = data_matrix[59][temp_Spindle_vib];
        var set_Spindle_load = data_matrix[67][temp_Spindle_load];

        temp_Spindle_brg_temp+=1;
        temp_Spindle_vib+=1;
        temp_Spindle_load+=1;

        Spindle_comp.spindle_brg_temp.setValueFromSource({dataType:opcua.DataType.Double, value: set_Spindle_brg_temp});
        Spindle_comp.spindle_vib.setValueFromSource({dataType:opcua.DataType.Double, value: set_Spindle_vib});
        Spindle_comp.spindle_load.setValueFromSource({dataType:opcua.DataType.Double, value: set_Spindle_load});
      }, read_timeout);

  }
}
