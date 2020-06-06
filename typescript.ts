let variableName: string = "10";

let age: number = 28;

let isOld: boolean = false;

let arrayStr: string[] = ["Becca", "Alex", "Mamaw"]
let tupleStr: [string, number, string] = ["Becca", 2, "Alex"]

//in TypeScript, an array can only hold one type of values
//if you need multiple values, must specify them in advance in a tuple

function doubler(x: number): number {
    return x * 2;
}

function isEven(x: number): boolean {
    return x % 2 === 0;
}

function printToConsole(saySomething: string): void {
    console.log(saySomething);
}

let anonFunction = function(isTough: boolean): string { return "This is tough --" + isTough }

function addUp(a: number, b?: number): number {
    return a + b + 5;
}

let defaultAdd = function(a: number, b = 5): number { return a + b }

console.log(isEven(5))
printToConsole("hello");
console.log(anonFunction(true));

console.log(addUp(1));
console.log(addUp(1, 9));
console.log(defaultAdd(1));
console.log(defaultAdd(1, 9));

class Person {
    name: string;
    birthDate: string;
    constructor(firstName: string, lastName: string, birthYear: number, birthMonth: number, birthDay: number) {
        this.name = firstName + " " + lastName;
        this.birthDate = birthMonth + "/" + birthDay + "/" + birthYear;
    }

    greet() {
        return "Hello, " + this.name;
    }
}

class Child extends Person {
    parentName1: string;
    parentName2: string;

    super(name: string, birthDate: string) {
        this.name = name;
        this.birthDate = birthDate;
    }

    assignParents(mom: string, dad: string) {
        this.parentName1 = mom;
        this.parentName2 = dad;
    }

    announceParents(): string {
        return `Hi, I'm ${this.name}. My parents are ${this.parentName1} and ${this.parentName2}.
        And my birth date is: ${this.birthDate}`;
    }
}

let Becca = new Person("Becca", "Williams", 1992, 3, 27);
let Alex = new Person("Alex", "V", 1952, 1, 1)
let baby = new Child("Skye", "Blue", 2030, 9, 21)
baby.assignParents("Azure", "Slate");
console.log(baby.announceParents());

console.log(baby);

interface Book {
    pageNumber: number;
}

class Novel implements Book {
    pageNumber: number;

    constructor() {
        this.pageNumber = 500;
    }
}

class LongStory implements Book {
    pageNumber: number;

    constructor() {
        this.pageNumber = 1200;
    }
}

function readBook(bookType: Book) {
    console.log(`Reading a book that has ${bookType.pageNumber} pages!`)
}

let regularBook = new Novel();
let longBook = new LongStory();

readBook(regularBook);
readBook(longBook);
