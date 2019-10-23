const input = [{ x: 3, y: 4 }, { x: 12, y: 5 }, { x: 8, y: 15 }];
const result = input.map(el => {
  let output = Math.sqrt(Math.pow(el.x, 2) + Math.pow(el.y, 2));
  return output;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
