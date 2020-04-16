'use strict'; 
(function() {

  function Person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname
  }

  Person.prototype.age = 29

  display(Person.prototype)

  let jim = new Person('Jim','Cooper');
 let sofia= new Person('Sofia','Cooper');
 sofia.__proto__.age =21

  display(jim.__proto__)
  display(sofia.__proto__)


  display(Person.prototype ===jim.__proto__);
})();