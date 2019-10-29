const sources = process.argv.slice(2);
console.log(sources);

const latins = array => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += `${array[i].slice(1)}${array[i][0]}ay `;
  }
  return result.trim();
};

console.log(latins(sources));
