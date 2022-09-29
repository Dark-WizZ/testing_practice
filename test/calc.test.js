import Calc from "../scripts/calc";

test("calcAdd", ()=>{
  expect(Calc.add(1, 2)).toBe(3);
})

test("calcAdd", ()=>{
  expect(Calc.sub(2, 1)).toBe(1);
})

test("calcAdd", ()=>{
  expect(Calc.mul(3, 2)).toBe(6);
})

test("calcAdd", ()=>{
  expect(Calc.div(10, 2)).toBe(5);
})