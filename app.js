console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let answer = prompt("Can you guess what my luck # is? (between 1-100)");

let favNumber = 70;
let min = 1;
let max = 100;

//Convert the guess to a number
answer = parseInt(answer);

// Validate Input (is it a number?)
if (isNaN(answer) || answer < 1 || answer > 100) {
  alert(`you didn't give me a valid  number between ${min} and ${max}`);
} else {
  //Game logic with valid input
  if (answer < 70) {
    alert("too low");
  } else if (answer > 70) {
    alert("too high");
  } else {
    alert("Congratulations!!!");
  }
}

//Exercise  2
let birthMonth = prompt("What is your birth month?").toLowerCase();

switch (birthMonth) {
  case "march":
  case "april":
  case "may":
    alert("You were born in the Spring!");
    break;
  case "june":
  case "july":
  case "august":
  case "aug":
    alert("You were born in the Summer!");
    break;
  case "september":
  case "sept":
  case "october":
  case "oct":
  case "november":
  case "nov":
    alert("You were born in Autumn!");
    break;
  case "december":
  case "dec":
  case "january":
  case "jan":
  case "february":
  case "feb":
    alert("You were born in the Winter!");
    break;
  default:
    alert("I'm not sure when you were born.");
}

//Exercise  3 

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "tank top";
    break;
  case  "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break; 
  case "04":
    type = "Swear Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case  "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break; 
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case  "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break; 
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}


console.log(`Product: ${size} ${color} ${type}`);