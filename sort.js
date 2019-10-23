const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];

console.log(
  students.sort(function(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1; // a is lower than b
    }
    if (nameA > nameB) {
      return 1; // b is lower than a
    }
    if (nameA === nameB) {
      return b.age - a.age;
    }
  })
);
