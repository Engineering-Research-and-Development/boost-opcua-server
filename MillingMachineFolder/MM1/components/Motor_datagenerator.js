var opcua = require("node-opcua");

module.exports = {
  Motor_datagenerator: function(Motor_comp,data_matrix,read_timeout) {

      var motor_temp = 1;

      setInterval(function(){

        if(motor_temp == data_matrix[55].length){
          motor_temp = 1;
        }

        var setmotor_temp = data_matrix[55][motor_temp];

        motor_temp+=1;

        Motor_comp.motor_temp.setValueFromSource({dataType:opcua.DataType.Double, value: setmotor_temp});
      }, read_timeout);

  }
}
