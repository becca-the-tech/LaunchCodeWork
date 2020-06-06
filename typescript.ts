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
