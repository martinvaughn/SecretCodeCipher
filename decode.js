function decode(str) {
   /************************************
    * Preprocess String. Erase punctuation & convert to upper case.
  *************************************/
  str = str.replace(".", "");
  str = str.replace("?", "");
  str = str.replace("!", "");
  str = str.replace(",", "");
  str.toUpperCase();

  let convertedNum = ""; // Place holder for ASCII Number.
  let convertedStr = ""; // End Str to return.
  
  //if char is A-M, convert upwards in ASCII,
  //else convert downwards.
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) <= 77) {
      convertedNum = str.charCodeAt(i)+13;
    } else {
      convertedNum = str.charCodeAt(i)-13;
   }

   //Check if converted char was a space, then change back to a space;
   if (convertedNum < 63){
     convertedNum -=13;
  }
   //convert ASCII back to Str
   convertedStr += String.fromCharCode(convertedNum);
  }
  
var newp=document.createElement('p');
var newtext=document.createTextNode(convertedStr);

newp.appendChild(newtext);
 document.getElementById('decoded').innerHTML = "";
document.getElementById('decoded').appendChild(newp);
//return convertedStr;
}


function getFormData(){ 
var code=document.getElementById('decode_input').value;
decode(code);
}
