


// //Q. EXPLAIN PROTOTYPE...............
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   Person.prototype.sayHello = function() {
//     console.log('Hello, my name is ' + this.name);
//   }
  
//   const person1 = new Person('John', 30);
//   const person2 = new Person('Jane', 25);
  
//   person1.sayHello();  // Output: 'Hello, my name is John'
//   person2.sayHello();  // Output: 'Hello, my name is Jane'
//   console.log(`The name of the person1 is:-> ${person1.name}`)


//   //Q. Prototype chaining...............
  // const animal = {
  //   makeSound: function() {
  //     console.log('Some animal sound');
  //   }
  // };
  
  // const dog = {
  //   bark: function() {
  //     console.log('Woof woof!');
  //   }
  // };
  
  // dog.__proto__ = animal;  // Set the prototype of the dog object to the animal object
  
  // dog.makeSound();  // Output: 'Some animal sound'
  // dog.bark();  // Output: 'Woof woof!'
  
  


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.speak = function() {
//       console.log('Hello, my name is ' + this.name);
//     }
// }
// const person1 = new Person('RAHUL', 22);
// const person2 = new Person('DEV', 25);

// console.log(person1.name); // Output: 'John'
// console.log(person2.age); // Output: 25

// person1.speak(); // Output: 'Hello, my name is John'
// person2.speak(); // Output: 'Hello, my name is Jane'

   

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  const person1 = new Person('John', 30);
  person1.sayHello();  // Output: "Hello, my name is John and I am 30 years old."
  
  
  function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
  }
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  Student.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am studying ${this.major}.`);
  };
  
  const student1 = new Student('RAHUL', 20, 'Computer Science');
  student1.sayHello();  