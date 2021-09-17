// Your code here
// cat
// 1) has a class of cat
// 2) cat.speak() returns '[name]' says meow!
class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };

    speak() {
        return `${this.name} says meow!`
    };
};

// dog
// 1) has a class of dog
// 2) dog.speak() returns '[name] says woof!'
class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };

    speak() {
        return `${this.name} says woof!`
    };
};

// bird
// 1) has a class of Bird
// 2) bird.speak() returns 'It's me! [name], the parrot!'
// 3) bird2.speak() returns 'Squawk!'
class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };

    speak() {
        return this.sex === 'male' ? `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`
    };
};