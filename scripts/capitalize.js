export default function capitalize(s){
  let code = s.charCodeAt(0)-32;
  if((code < 65 && code > 90) || (code < 97 && code > 122)) return;
  let fl =  String.fromCharCode(code);
  return fl + s.slice(1,s.length);
}