import Animal from './Animal.js';

let king = new Animal("Mufasa", 3.4);

console.log(king);

king.hello();

class Lion extends Animal{
	constructor(name, height, color){
		super (name, height);
		this.color = color;
	}

	hello(){
		console.log(` Hi i am ${this.name} from Pride Rock!`);
	}
}


let son = new Lion("Simba", 2, "golder");

console.log(son);
son.hello();