const prices = [45, 24, 35, 31, 40, 38, 11];

let profit = 0;

const sub = (a, b) => {
  return b - a;
};

const runner = arr => {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      let difference = sub(prices[i], prices[j]);
      if (difference > profit) {
        profit = difference;
      }
    }
  }
  return profit;
};
console.log(runner(prices));
