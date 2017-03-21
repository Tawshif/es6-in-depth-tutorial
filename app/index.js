// import Animal from './Animal.js';

// let king = new Animal("Mufasa", 3.4);

// console.log(king);

// king.hello();

// class Lion extends Animal{
// 	constructor(name, height, color){
// 		super (name, height);
// 		this.color = color;
// 	}

// 	hello(){
// 		console.log(` Hi i am ${this.name} from Pride Rock!`);
// 	}
// }


// let son = new Lion("Simba", 2, "golder");

// console.log(son);
// son.hello();

// function Wizard(name, house, pet) {
//     this.name = name;
//     this.house = house;
//     this.pet = pet;
//     this.greet = () => {
//         return `Im ${this.name} from ${this.house}`
//     }
// }

// Wizard.prototype.pet_name;

// Wizard.prototype.info = function() {

//     return `My ${this.pet} name is ${this.pet_name}`
// }

// let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
// harry.pet_name = "Hedwig";


// console.log(harry.info(), harry.greet());


let a = new Set();

a.add(5);
a.add(43);
a.add("what");
a.add({x:5, y:6});

console.log(a.has(43));


let numbers = [5,7,8,13,17];
let numSet = new Set(numbers);

// console.log(numSet);

for(let element of numSet.values()){
	console.log(element);
}

let chars = 'whateveryouantinthisawesomearray';
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set);