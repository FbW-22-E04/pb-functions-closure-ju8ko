// 1.In your own words, define closure (1-2 sentences):
// the closure it is when a function reads or modifies the value of a variable defined outside its context.

//2.
function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();

//2.1 In this case "the parameter of the personalDice "name"" is a closure.
//2.2 The name is always the same. And the "newRoll" number is changing
//2.3   newRoll’s lexical scope is function()’s local environment because function() is newRoll’s definition space.
//3

const createBase = (num) =>
  function addSix(num2) {
    console.log(num + num2);
  };
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
