var opcua = require("node-opcua");

module.exports = {
  Axis_X_datagenerator: function(Axis_X_comp,data_matrix) {

      var tempAxis_X_pos = 1;
      var tempAxis_X_load = 1;

      setInterval(function(){

        if(tempAxis_X_pos == data_matrix[23].length){
          tempAxis_X_pos = 1;
        }
        if(tempAxis_X_load == data_matrix[71].length){
          tempAxis_X_load = 1;
        }

        var setAxis_X_pos = data_matrix[23][tempAxis_X_pos];
        var setAxis_X_load = data_matrix[71][tempAxis_X_load];

        tempAxis_X_pos+=1;
        tempAxis_X_load +=1;

        Axis_X_comp.axis_X_pos.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_X_pos});
        Axis_X_comp.axis_X_load.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_X_load});
      }, 1000);

  }
}
