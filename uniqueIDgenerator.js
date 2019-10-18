// eslint-disable-next-line func-style
function makeIdGenerator() {
  let id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  };
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
const nextId = makeIdGenerator();

console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2

//Exercises
//1.
// eslint-disable-next-line func-style
function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let id = 0;
  return function() {
    if (id === list.length - 1) {
      id = 0;
      return list[id];
    }
    id += 1;
    return list[id - 1];
  };
}

const rollLoadedDie = makeLoadedDie();

//Enjoy :)
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6
console.log(rollLoadedDie()); // 1
console.log(rollLoadedDie()); // 6
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 2
console.log(rollLoadedDie()); // 3
console.log(rollLoadedDie()); // 3
console.log(rollLoadedDie()); // 5

//2. Countdown
const countdownGenerator = function(x) {
  /* your code here */
  let id = x;
  return function() {
    switch (id) {
    case 3:
      console.log("T-minus 3...");
      break;
    case 2:
      console.log("T minus 2...");
      break;
    case 1:
      console.log("T minus 1...");
      break;
    case 0:
      console.log("Blast off");
      break;
    default:
      console.log("Rockets already gone, bub!");
    }
    id -= 1;
  };
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
