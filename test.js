// // Higher order function
/*function ArrayManipulat(array, instruction) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(instruction(array[i]));
  }
  console.log(newArr);
}

const arrayManipulate = (array, instructions) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(instructions(array[i]));
  }
  console.log(newArray);
};

const multiply = (input) => input * 2;
ArrayManipulat([1, 2, 3, 4, 5], (input) => input * 2);
arrayManipulate([2, 3, 4, 5, 6], multiply);*/

// // Closure
/*function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}
const newFunc = outer();
newFunc();
newFunc();

const anotherNewFunction = outer();
anotherNewFunction();
anotherNewFunction();*/

// function printHello() {
//   console.log("Hello");
// }
// function blockFor1Sec() {}
// setTimeout(printHello, 0);
// blockFor1Sec();
// console.log("Me first!");

/*function display(data) {
  console.log(data);
}

const futureData = fetch("https://twitter.com/will/tweets/1");
futureData.then(display);

console.log("Me first!");*/

//(1) Objects

/*const user1 = {
  name: "will",
  score: 3,
  increment: function () {
    {
      this.score++;
    }
  },
};

user1.increment();
console.log(user1.score); */

// Dot notation

/*const user2 = {};

user2.name = "Tim";
user2.score = 6;
user2.increment = function () {
  this.score++;
};*/

// Using object.create
/*
const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
  this.score++;
};*/

// Using Function

// function createUser(name, score) {
//   const newUser = {};
//   newUser.name = name;
//   newUser.score = score;
//   newUser.increment = function () {
//     newUser.score++;
//   };
//   return newUser;
// }

// const user1 = createUser("Will", 3);
// const user2 = createUser("Tim", 5);
// user1.increment();
// user2.increment();
// console.log(user1.score);
// console.log(user2.score);

//(2) Using prototype chain

/*function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};
const user1 = new userCreator("Will", 3);
const user2 = new userCreator("Tim", 5);
user1.increment();
user1.hasOwnProperty("score");*/

// (3) Using new keyword
/*
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  this.score++;
};
UserCreator.prototype.login = function () {
  console.log("Logged in");
};

const user1 = new UserCreator("Will", 3);
user1.increment();
console.log(user1);*/

// (4) Class Syntactic Sugar

// class UserCreator {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }
//   increment() {
//     this.score++;
//   }
//   login() {
//     console.log("Logged in");
//   }
// }

// const user1 = new UserCreator("Will", 3);
// user1.increment();
// console.log(user1);

console.log(Number('0o46'))