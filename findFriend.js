// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const friendFinder = (data, name, field) => {
  //Finds the person to check for a friend.

  const identifiedPerson = data.find(el => el.name === name);
  //Checks if we have that person
  if (!identifiedPerson) {
    console.log("Not found!");
    return `Not found`;
  }
  //If we have that person, it will find the first frined.
  const friend = identifiedPerson.friends[0];

  //It will give the result object of friend.
  const result = data.find(el => el.name === friend);
  console.log("result", result);

  //Checks if we have requested field.
  if (!result[`${field}`]) {
    console.log("Not found");
    return `Not found`;
  }

  let output = { name: result.name, [`${field}`]: result[`${field}`] };
  return output;
};

console.log(friendFinder(contacts, "Abbott", "phone"));