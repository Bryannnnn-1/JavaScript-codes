const details = [
  { 
    name: "Bryan", 
    age: 19,
    bestFood: "Jollof Rice", 
  },
  {
    name: "Sarah",
    age: 21,
    bestFood: "Fried Rice",
  },
  {
    name: "Micheal",
    age: 20,
    bestFood: "Pounded Yam",
  },
];

const summingDetails = details.reduce((acc, details) => acc + details.age, 0);

console.log(summingDetails);