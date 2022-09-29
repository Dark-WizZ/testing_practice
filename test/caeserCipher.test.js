import caeserCipher from "../scripts/caeserCipher";

test("caeserCipher oneLetter", ()=>{
  expect(caeserCipher.encode('d')).toBe('e')
})

test("caeserCipher multiLetter", ()=>{
  expect(caeserCipher.encode('dog')).toBe('eph')
})

test("caeserCipher wrapAround", ()=>{
  expect(caeserCipher.encode('dizz')).toBe('ejaa')
})

test("caeserCipher withCap", ()=>{
  expect(caeserCipher.encode('DIZZ')).toBe('EJAA')
})

test("caeserCipher symbolException", ()=>{
  expect(caeserCipher.encode("code,red")).toBe("dpef,sfe")
})