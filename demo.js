'use strict'; 
(function() {
  class Person{
    constructor(firstname,lastname,age){
      this.firstname=firstname;
      this.lastname=lastname;
      this.age= age
    }
    get fullname(){
      return this.firstname+' '+this.lastname
    }
    set fullname(fullname){
      var nameParts=fullname.split(' ');
      this.firstname=nameParts[0];
      this.lastname=nameParts[1];
    }
    isAdult(){
      return this.age >=18
    }
  }
  Object.defineProperty(Person.prototype,'fullname',{enumerable:true});
  let jim= new Person('jim','cooper',29);

function findAlerts(logdata){
  let regex=/ERROR:/;
  return regex.exec(logdata)
} 


let date= new Date(10000000);
display(date.toString())
})();