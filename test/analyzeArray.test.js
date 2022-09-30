import analyzeArray from "../scripts/analyzeArray";

let test1 = [2,3,56,7,43,2,6,8,3,4]

test("Analyze Array", ()=>{
  expect(analyzeArray(test1)).toStrictEqual({
    average: 13.4,
    min: 2,
    max: 56,
    length: 10,
  })
})