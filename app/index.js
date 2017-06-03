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
// console.log(a.size);
// console.log(a.has(43));


// let numbers = [5,7,8,13,17];
// let numSet = new Set(numbers);

// console.log(numSet);

// for (let element of numSet.values()){
// 	console.log(element);
// }

// let ar = ['hello', 'unreal', 'doom'];
// let arSet = new Set(ar);
// console.log(ar.indexOf('doom'));

// for(let i of ar.values())
// {
// 	console.log(i);
// }

// let chars = 'lkasdjfalskdjf0lktasld';
// let chars_arr = chars.split("");
// let chars_set = new Set(chars_arr);
// console.log(chars_set);


// let a = new Map();
// let key_1 = "string key";
// let key_2 = {a:'key'};
// let key_3 = function(){};

// a.set(key_1, 'return value of a string key');
// a.set(key_2, 'return value of an object key');
// a.set(key_3, 'return value of a function key');

// console.log(a);



// let numArr = [
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three']
// ];
//
// let valMap = new Map(numArr);
// console.log(valMap);
//
// for (let [key, value] of valMap.entries()) {
//     console.log(`${key} points to ${value}`);
// }

// let string = "myWordsarereal";
//
// let letters = new Map();
// for (let i = 0; i < string.length; i++) {
//     let letter = string[i];
//     if (!letters.has(letter)) {
//         letters.set(letter, 1);
//     } else {
//         letters.set(letter, letters.get(letter) + 1);
//     }
// }
// console.log(letters);

// let call = () => {
//     let secret = "ES6 Rocks !";
//     let reveal = () => {
//         console.log(secret);
//     }
//     return reveal;
// }
//
// let unvail = call();
//
// unvail();

// const addSuffix = (x) => {
// 	console.log(x)
//     const concat = (y) => {
//        return y + x;
//     }
//     return concat;
// }

// let add_ful = addSuffix("ful");
// let f = add_ful("fruit");
// console.log(f);

// let add_ful = addSuffix("ful");
// let f = add_ful("fruit");
// console.log(f);

// const product = x => y =>  y * x;

// let mult5 = product(5);
// let double = product(2);

// console.log(mult5(5));
// console.log(double(5));

// function* letterMaker(){
// 	yield 'a';
// 	yield 'b';
// 	yield 'c';
// }

// let letterGen = letterMaker();

// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

// function* countMaker(){
// 	let count = 0;

// 	while (count < 4 ) {
// 		yield count += 1;
// 	}
// }

// let counter = countMaker();
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

// let p = new Promise((resolve, reject) => {
// 	// resolve("Resolved promis data");
// 	// reject("Rejected promis data");
// 	setTimeout(() => resolve("Resolved promis data"), 1000);
// })

// p.then(response => console.log(response))
// 	.catch(error => console.log(error));

// console.log('after promise consumption');

// const root = 'https://jsonplaceholder.typicode.com/posts/1';
// const root = "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699"

// fetch(root , { method:"GET"})
// 	.then(response => response.json())
// 	.then(json => console.log(json));


import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/Global';

ReactDOM.render(
	<Global />, 
	document.getElementById('root')
);