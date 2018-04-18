var opcua = require("node-opcua");

module.exports = {
  Axis_Y_datagenerator: function(Axis_Y_comp,data_matrix) {

      var tempAxis_Y_pos = 1;
      var tempAxis_Y_load = 1;

      setInterval(function(){

        if(tempAxis_Y_pos == data_matrix[27].length){
          tempAxis_Y_pos = 1;
        }
        if(tempAxis_Y_load == data_matrix[75].length){
          tempAxis_Y_load = 1;
        }

        var setAxis_Y_pos = data_matrix[27][tempAxis_Y_pos];
        var setAxis_Y_load = data_matrix[75][tempAxis_Y_load];

        tempAxis_Y_pos+=1;
        tempAxis_Y_load +=1;

        Axis_Y_comp.axis_Y_pos.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_Y_pos});
        Axis_Y_comp.axis_Y_load.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_Y_load});
      }, 1000);

  }
}
