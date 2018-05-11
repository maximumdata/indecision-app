class Person {
    constructor(name = 'Anon') {
        this.name = name;
    }
}

const me = new Person('Mike D');

console.log('me', me);

const other = new Person();
console.log('other', other);
