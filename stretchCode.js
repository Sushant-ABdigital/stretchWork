const squareCode = message => {
  // remove all the spaces in the message
  message = message.replace(/ /g, ""); //54
  let columns = Math.ceil(Math.sqrt(message.length)); //8
  // console.log(columns);
  let rows = Math.ceil(message.length / columns); //7
  //Wrapper array
  let initArr = [];
  for (let i = 0; i < rows; i++) {
    initArr[i] = [];
    for (let j = 0; j < columns; j++) {
      initArr[i][j] = message[i * columns + j];
      if (i * columns + j === message.length - 1) {
        break;
      }
    }
  }
  //transpose message array
  let ansArr = [];
  for (let i = 0; i < columns; i++) {
    ansArr[i] = [];
    for (let j = 0; j < rows; j++) {
      if (initArr[j][i]) {
        ansArr[i][j] = initArr[j][i];
      }
    }
    ansArr[i] = ansArr[i].join("");
  }

  return ansArr.join(" ");
};

// console.log(squareCode("chill out"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
