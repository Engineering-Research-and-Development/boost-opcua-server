var opcua = require("node-opcua");

module.exports = {
  Axis_C_datagenerator: function(Axis_C_comp,data_matrix,read_timeout) {

      var tempAxis_C_pos = 1;
      var tempAxis_C_load = 1;

      setInterval(function(){

        if(tempAxis_C_pos == data_matrix[39].length){
          tempAxis_C_pos = 1;
        }
        if(tempAxis_C_load == data_matrix[87].length){
          tempAxis_C_load = 1;
        }

        var setAxis_C_pos = data_matrix[39][tempAxis_C_pos];
        var setAxis_C_load = data_matrix[87][tempAxis_C_load];

        tempAxis_C_pos+=1;
        tempAxis_C_load +=1;

        Axis_C_comp.axis_C_pos.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_C_pos});
        Axis_C_comp.axis_C_load.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_C_load});
      }, read_timeout);

  }
}
