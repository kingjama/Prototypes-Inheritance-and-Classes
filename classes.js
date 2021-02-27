// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.


function Person(attributes){

    this.myName=attributes.myName; this.age=attributes.age; this.hobby=attributes.hobby; this.speak=function(){return `'Hello, my name is ' +
    '${this.myName}+ ' ' + 'and I'm ' + ${this.age} + ' ' + 'years old. I love ' + ${this.hobby}+'.'    `}
}
class Child extends Person{
    constructor(childAttributes){super{childAttributes)
    this.myName=childAttributes.myName; this.age=childAttributes.age; this.hobby=childAttributes.hobby}}
}

const faduma = new Child({myName: 'Faduma', age: 25, hobby: 'reading'})
console.log(faduma.speak())
// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Extend Person class and create one class for each member of your family.

function Person(attributes){

    this.myName=attributes.myName; this.age=attributes.age; this.hobby=attributes.hobby; this.speak=function(){return `Hello, my name is ${this.myName} and I'm ${this.age} years old. I love ${this.hobby}`}
}
class Child extends Person{
    constructor(ChildAttributes){super(ChildAttributes);
    this.activities=ChildAttributes.activities; this.think=ChildAttributes.think;
    this.speakk=function(){return `Hello this is me again, ${this.myName} , I love ${this.think} and ${this.activities} and ${this.hobby}`}}
}

const faduma = new Child({myName: 'Faduma', age: 25, hobby: 'reading', think: 'playing', activities: 'running'} )
console.log(faduma.speakk())

const omar = new Child({myName: 'Omar', age: 35, hobby: 'playing basketball', think: 'playing chess', activities: 'jogging'} )
console.log(omar.speakk())

const ruqiya = new Child({myName: 'Ruqiya', age: 23, hobby: 'playing hockey', think: 'reading', activities: 'writing'} )
console.log(ruqiya.speak())
