let result = document.getElementById('textResult');


function calcButtonClick(elem){
  let resultRightValue = (result.value.slice(-1)); //一番右の文字
  let resultValueLength = (result.value).length; //文字数

  if(elem.value=='='){  
    if(resultRightValue=='+'||resultRightValue=='-'||resultRightValue=='*'||resultRightValue=='/'){
    }else{
      result.value = Function('return ('+result.value+');')();
    }
  }else if(elem.value=='ac'){
    result.value = 0;
  }else if(elem.value=='.'){
    if(resultRightValue=='+'||resultRightValue=='-'||resultRightValue=='*'||resultRightValue=='/'){
    }else if(hanteiDecimalPoint(result.value)=='OK'){
      result.value = result.value + elem.value;
    }else if(hanteiDecimalPoint(result.value)=='NG'){
    }
  }else if(elem.value=='+'||elem.value=='-'||elem.value=='*'||elem.value=='/'){
    if(result.value==0){
    }else if(resultRightValue=='+'||resultRightValue=='-'||resultRightValue=='*'||resultRightValue=='/'){
      result.value = result.value.slice(0,resultValueLength-1) + elem.value; //一番右の文字以外+入力文字
    }else if(resultRightValue=='.'){
    }
    else{
      result.value = result.value + elem.value;
    }
  }else if(elem.value=='00'){
    if(result.value=='0'){
    }
    else if(resultRightValue=='+'||resultRightValue=='-'||resultRightValue=='*'||resultRightValue=='/'){
    }
    else if(resultRightValue=='0'){
      if(hantei0(result.value)=='OK'){
        result.value = result.value + elem.value;
      }else if(hantei0(result.value)=='NG'){
      }
    }
    else{
      result.value = result.value + elem.value;
    }
  }else{
    if(resultRightValue == '.'){
      result.value = result.value + elem.value;
    }else if(resultRightValue==0){
      if(resultValueLength==1){
        result.value = elem.value;
      }else{
        if(hantei0(result.value)=='OK'){
          result.value = result.value + elem.value;
        }else if(hantei0(result.value)=='NG'){
        }
      }
    }else{
      result.value = result.value + elem.value;
    }
  }
}


function hanteiDecimalPoint(suusiki){
  //数式を受け取り、小数点が入力出来るか判定する。
  //OK：入力可、NG：入力不可。
  let suusikiSplit = suusiki.split('');
  let hantei = 'OK'

  for(let i= suusikiSplit.length; i>=0;i--){
    if(suusikiSplit[i]=='.'){
        hantei = 'NG';
        break;
    }else if(suusikiSplit[i]=='+'||suusikiSplit[i]=='-'||suusikiSplit[i]=='*'||suusikiSplit[i]=='/'){
      hantei = 'OK';
      break;
    }
  }
  return hantei;
}


function hantei0(suusiki){
  //数式を受け取り、  0が入力出来るか判定する。
  //OK：入力可、NG：入力不可。
  let suusikiSplit = suusiki.split('');
  let yousoNo = suusikiSplit.length-2;
  let hantei = 'OK'

  if(suusikiSplit[yousoNo]=='+'||suusikiSplit[yousoNo]=='-'||suusikiSplit[yousoNo]=='*'||suusikiSplit[yousoNo]=='/'){
      hantei = 'NG';
  }else{
    hantei = 'OK';
  }
  return hantei;
}