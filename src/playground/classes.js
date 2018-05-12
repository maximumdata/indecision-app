class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getAge() {
        return `I'm ${this.age} years old.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

const me = new Student('Mike D', 30, 'fuck off');

console.log(me.getGreeting());
console.log(me.hasMajor());
const other = new Student();
console.log('other', other);

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `. They are a ${this.major} major`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super();
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greet = super.getGreeting();
        if (this.hasHomeLocation) {
            greet += ` I'm visiting from ${homeLocation}.`;
        }
        return greet;
    }
}

let what = new Traveler('mike', 30, 'detroit');
console.log('what.getGreeting()', what.getGreeting());
