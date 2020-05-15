class Astronaut {
    constructor(name, age, mass, phrase) {
        this.name = name,
            this.age = age;
        this.mass = mass;
        this.phrase = phrase;
    }

    catchPhrase = function(repeats) {
        let phrase = this.phrase;
        for (let i = 0; i < repeats; i++) {
            phrase += " Rocks";
        }
        return phrase;
    };

}

let fox = new Astronaut("Amber", 13, 250, "Hello");
console.log(`${fox.name} is ${fox.age} old and weighs ${fox.mass} grams`);
console.log(`${fox.name} says, '${fox.catchPhrase(3)}'`);
