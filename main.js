let result = document.getElementById('textResult');

function calcButtonClick(elem){
  if(elem.value=='='){   
    result.value = Function('return ('+result.value+');')();
  }else if(elem.value=='ac'){
    result.value = 0;
  }else{
    if(result.value==0){
        result.value = elem.value;
    }else{
      result.value = result.value + elem.value;
    }
  }
}