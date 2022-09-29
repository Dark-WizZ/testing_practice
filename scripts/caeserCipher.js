export default class caeserCipher{
  static encode(s){
    let res = '';
    for(let i=0; i<s.length; i++){
      let code = s.charCodeAt(i);
      if((code == 122 || code == 90)) code -= 25;
      else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) code++;
      res += String.fromCharCode(code);
    }
    return res;
  }
}