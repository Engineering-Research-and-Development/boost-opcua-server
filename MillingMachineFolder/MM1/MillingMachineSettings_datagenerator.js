var opcua = require("node-opcua");

module.exports = {
  Mms_datagenerator: function(Settings_comp,data_matrix) {

      var tempTool = 1;
      var tempOperation = 1;
      var tempMach_pgm = 1;
      var tempN_line = 1;
      var tempNb_repet = 1;
      var tempMachine_msg = 1;


      setInterval(function(){

        if(tempTool == data_matrix[5].length){
          tempTool = 1;
        }
        if(tempOperation == data_matrix[2].length){
          tempOperation = 1;
        }
        if(tempMach_pgm == data_matrix[3].length){
          tempMach_pgm = 1;
        }
        if(tempN_line == data_matrix[4].length){
          tempN_line = 1;
        }
        if(tempNb_repet == data_matrix[105].length){
          tempNb_repet = 1;
        }
        if(tempMachine_msg == data_matrix[106].length){
          tempMachine_msg = 1;
        }

        var setTool = data_matrix[5][tempTool];
        var setOperation = data_matrix[2][tempOperation];
        var setMach_pgm = data_matrix[3][tempMach_pgm];
        var setN_line = data_matrix[4][tempN_line];
        var setNb_repet = data_matrix[105][tempNb_repet];
        var setMachine_msg = data_matrix[106][tempMachine_msg];

        tempTool+=1;
        tempOperation +=1;
        tempMach_pgm +=1;
        tempN_line +=1;
        tempNb_repet +=1;
        tempMachine_msg +=1;


        Settings_comp.tool.setValueFromSource({dataType:opcua.DataType.Double, value: setTool});
        Settings_comp.operation.setValueFromSource({dataType:opcua.DataType.String, value: setOperation});
        Settings_comp.mach_pgm.setValueFromSource({dataType:opcua.DataType.String, value: setMach_pgm});
        Settings_comp.n_line.setValueFromSource({dataType:opcua.DataType.Double, value: setN_line});
        Settings_comp.nb_repet.setValueFromSource({dataType:opcua.DataType.Double, value: setNb_repet});
        Settings_comp.machine_msg.setValueFromSource({dataType:opcua.DataType.String, value: setMachine_msg});
      }, 1000);

  }
}
