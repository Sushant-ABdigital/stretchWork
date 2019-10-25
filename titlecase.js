//Paired programing with @abemsi
const titleCase = str => {
  let splitStr = str.split(" ");
  let output = "";
  splitStr.forEach(el => {
    let temp = el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    output += `${temp} `;
  });
  return output;
};

console.log(titleCase("hAndlE wEIrd vOwEl cAsE"));
