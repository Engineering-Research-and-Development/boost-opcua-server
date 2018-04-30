var opcua = require("node-opcua");

module.exports = {
  Axis_Z_datagenerator: function(Axis_Z_comp,data_matrix,read_timeout) {

      var tempAxis_Z_pos = 1;
      var tempAxis_Z_load = 1;

      setInterval(function(){

        if(tempAxis_Z_pos == data_matrix[31].length){
          tempAxis_Z_pos = 1;
        }
        if(tempAxis_Z_load == data_matrix[79].length){
          tempAxis_Z_load = 1;
        }

        var setAxis_Z_pos = data_matrix[31][tempAxis_Z_pos];
        var setAxis_Z_load = data_matrix[79][tempAxis_Z_load];

        tempAxis_Z_pos+=1;
        tempAxis_Z_load +=1;

        Axis_Z_comp.axis_Z_pos.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_Z_pos});
        Axis_Z_comp.axis_Z_load.setValueFromSource({dataType:opcua.DataType.Double, value: setAxis_Z_load});
      }, read_timeout);

  }
}
