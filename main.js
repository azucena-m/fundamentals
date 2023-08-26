// VARIABLES, DATA TYPES, AND TYPING

//variables
let wordData;

wordData = "word list";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

//data types, 5 primitive types and 1 composite types
let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "value of inner object",
    },
};
console.log(obj.obj2.obj2Key1);

//typing systems, static or dynamic, JavaScript is dynamic
let variable = "string";

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);

//operators allow us to perform mathematical or concatenation operations
let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2";
console.log(string);


//-------------------------------------------------------------------------------------------

//CONDITIONALS, FUNCTIONS, SCOPE AND LOOPS.

//conditionals
//equals
let equals = 1 === 1;

//greater than
let greaterThan = 5 > 1;

//less than
let lessThan = 2 < 10;

//greater than or equals to
let greaterThanEq = 5 >= 5;

//less than or equals to
let lessThanEq = 4 <= 9;

//not equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 4.40;
let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);

//if statement, control statement, allows us to control the flow of the program
// if (storeAIsLower) {
//     console.log("Store A has a lower price.")
// } else if (storeB < storeA){
//     console.log("Store B has a lower price.")
// } else {
//     console.log("Their prices are equal.")
// }

//functions, a way to encapsulate our code in a way that is reusable, similar to if block
function compareStorePrices (storeA, storeB) {
    let storeAIsLower =  storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}
// compareStorePrices(10, 5);
// compareStorePrices(7,10);

//functions can give us values
// function squareNum (number){
//     return number * number;
// }
function squareNum (number){
    let squared =  number * number;
    return squared;
}

let squaredNumber = squareNum(7);
console.log(squaredNumber);

//scope, the idea that certain values or variables are only accessible within certain levels of your code
//JavaScripts is lexically scoped, which means that the scopes cascade down
//if x is defined as a variable inside of the function it will override the x and the global scope
//if console logging x it is still 10, the global scope is still 10

let x = 10;
// function addNumbers (n, m, x){
//     console.log(x)
//     return n + m;
// }
// addNumbers(2, 3, 8)
// console.log(x)

//JS has 3 levels of scope, global scope, function scope, and block scope.
//block scope means that things like if blocks have their own scope
function addNumbers (n, m, x){
    let b;     //if you want to use the value of b, we have to declare the variable outside of the scope of the if block
    if (1 === 1){
        b = 8;
    }
    console.log(b)
    return n + m;

}
addNumbers(1, 2, 10);

//arrays
//arrays a type of data structure
//data structures are a way to organize pieces of data similar to objects
// let ourArray = [1, 2, 3, 4, 5, 6, 7];

// let newArray  =ourArray [4]
// console.log(ourArray[0]);

//loops are similar to if block, they repeat a certain section until a condition is met
//for loop (counter, comparison, and an incrementor), separated by ;
// let arrLen = ourArray.length;
// for (let i = 0; i < arrLen; i++){
//     // console.log("i is equal to: " + i);
//     console.log(ourArray[i]);
//     for (let j = 0; j < 10; j++){          //for inner loops, the inner loop will to its loops for every time that the outer loop executes
//         console.log('j is equal to: ' +j); //it could take a long time to complete, be cautious putting loops within loops
//     }
// }

//while loop, runs until a conditional is false, it is easy to create an infinite loop (use caution)
while (x < 10){
    console.log('Ran');
    x = x + 1;
}

//--------------------------------------------------------------------------------------------------------------
//OBJECTS, INTERFACES, AND API'S
//object-oriented programming is a way to represent data and functionality in an encapsulated way
//object contains data and functionality that are related.
//object-oriented programming interface vs. implementation, has to do with the functions of the object, the interface:
//is the functions signature, the signature is the name and the parameters. The implementation: is what the function is
//doing under the hood.

//Objects-----------------
let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "small",
    bark: function () { //for the dog created, its API is the bark function
        console.log("Bark!");
    }, //the key serves as the function name, thus it does not have to be added
};
dog.bark();

//APIs------------------
//application programming interface: interfaces written into software to be used by other programmers to interact with
//the code.
//REST APIs are the same idea, they allow you to interact with other people's code, except, rather than using functions
//they use URLs

//Passing by value & passing by reference--------------
//data can be passed by value: inside of the function,only the value of the data is imported (data essentially copied
//for use inside of the function).
//passing by reference: the parameter being passed in only points to the original data (if you pass in data to a
//by reference and change it in some way, the original piece is affected as well).

function x(y){
    y.num = y.num + 5;
    console.log(y);
}
let y = {
    name: "tom",
    num: 10,
};
x(y);
console.log(y);

