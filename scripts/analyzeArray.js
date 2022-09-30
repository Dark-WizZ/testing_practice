export default function analyzeArray(arr){
  let res = {};
  res.length = arr.length;
  res.min = arr.reduce((x, a)=>{
    return x<a? x: a;
  })
  res.max = arr.reduce((x, a)=>{
    return x>a? x: a;
  })
  res.average = arr.reduce((x, a)=> x+a )/res.length;
  return res;
}