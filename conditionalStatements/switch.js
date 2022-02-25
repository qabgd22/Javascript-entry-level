const prompt = require('prompt-sync')();
let points = Number(prompt("How many points did you get on the exam? "));

switch (true) {
    case ((points >=0) && (points <= 50)):
      console.log("Sorry. You failed the exam.");
      break;
    case ((points >= 51) && (points <= 60)):
      console.log("Your mark is 6.");
      break;
    case ((points >= 61) && (points <= 70)):
      console.log("Your mark is 7.");
      break;
    case ((points >= 71) && (points <= 80)):
      console.log("Your mark is 8.");
      break;
    case ((points >= 81) && (points <= 90)):
      console.log("Your mark is 9.");
      break;
    case ((points >= 91) && (points <= 100)):
      console.log("Congratulations!!! Your mark is 10.");
      break;
    default:
      console.log("You have entered an irregular value.");
      break;
  }