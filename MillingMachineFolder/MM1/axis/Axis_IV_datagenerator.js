var opcua = require("node-opcua");

module.exports = {
  Axis_IV_datagenerator: function(Axis_IV_comp,data_matrix) {

      var tempAxis_IV_pos = 1;
      var tempAxis_IV_load = 1;

      setInterval(function(){

        if(tempAxis_IV_pos == data_matrix[35].length){
          tempAxis_IV_pos = 1;
        }
        if(tempAxis_IV_load == data_matrix[83].length){
          tempAxis_IV_load = 1;
        }

        var setAxis_IV_pos = data_matrix[35][tempAxis_IV_pos];
        var setAxis_IV_load = data_matrix[83][tempAxis_IV_load];

        tempAxis_IV_pos+=1;
        tempAxis_IV_load +=1;

        Axis_IV_comp.axis_IV_pos.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_IV_pos});
        Axis_IV_comp.axis_IV_load.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_IV_load});
      }, 1000);

  }
}
