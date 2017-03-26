// class Animal {
//     constructor(name, height) {
//         this.name = name;
//         this.height = height;
//     }
//
//     hello() {
//         console.log(`Hi! I'm ${this.name} from this animal kingdom`);
//     }
// }
// let king = new Animal('Mufasa', 4.5);
// console.log(king);
// king.hello();
//
// class Lion extends Animal {
//   constructor(name, height, color){
//     super(name, height);
//     this.color = color;
//   }
//   hello(){
//     console.log(`Hi im ${this.name} from pride rock!`);
//   }
// }
//
// let son = new Lion("simba", 2, "golden");
// console.log(son);
// son.hello();


// class Calculator {
//   constructor() {
//
//   }
//   static multiply(a, b){
//     return a*b;
//   }
//
//   static add (a, b){
//     return a+b;
//   }
// }
//
// let a = Calculator.add(5, 7);
// console.log(a);


// function Wizard(name, house, pet) {
//     this.name = name;
//     this.house = house;
//     this.pet = pet;
//     this.greet = ()=> `I am ${this.name} from ${this.house}`
// }
// Wizard.prototype.pet_name;
// Wizard.prototype.info = function(){
//    return `I have a ${this.pet} named ${this.pet_name}`
// };
// let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
// harry.pet_name = "Hedwig";
// console.log(harry.info());

// let a = new Set();
// a.add(5);
// a.add(43);
// a.add("Woohoo");
// a.add({x:50, y:200});
// console.log(a.has(43));


// let numbers = [5,7,8,13,17];
// let numSet = new Set(numbers);
// console.log(numSet);

// for (let element of numSet.values()){
// 	console.log(element);
// }

// let chars = 'lkasdjfalskdjf0lktasld';

// let chars_arr = chars.split("");
// console.log(chars_arr);


// let a = new Map();
// let key_1 = "string key";
// let key_2 = {a:'key'};
// let key_3 = function(){};

// a.set(key_1, "return value of a string key");
// a.set(key_2, "return value of a string key");
// a.set(key_3, "return value of a string key");

// console.log(a)

// let numArr = [[1,'one'], [2,'two'], [3, 'three']];

// let valMap = new Map(numArr);
// console.log(valMap);

// for( let[key, value] of valMap.entries()){
// 	console.log(`${key} points to ${value}`);
// }

// let string = "myWordsarereal";

// let letters = new Map();
// for(let i=0; i<string.length; i++){
// 	let letter = string[i];
// 	if(!letters.has(letter)){
// 		letters.set(letter, 1);
// 	}else{
// 		letters.set(letter, letters.get(letter) + 1);
// 	}
// }

// console.log(letters);

// let call = () => {
// 	let secret = 'ES6 rocks!';
// 	let revel = ()=>{
// 		console.log(secret);
// 	}
// 	return revel;
// }
// call();
// let unvail = call();
// unvail();
//