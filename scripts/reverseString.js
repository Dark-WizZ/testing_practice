export default function reverseString(s){
  let rs = "";
  for(let i=s.length-1; i>=0; i--){
    rs += s.charAt(i);
  }
  return rs;
}