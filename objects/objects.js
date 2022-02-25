//Object person has 5 properties.

let person = {
    id: 12345,
    firstName: "Boris",
    lastName : "Mikić",
    occupation: "QA engineer",
    age: 40,
    phone: "+381 35 1111 111",
    
    fullName : function() {                         //Method is stored in properties as function definition
      return this.firstName + " " + this.lastName;
    }
  };
  // Display data from the object:
  console.log(person.fullName());
  console.log(person.id);
  console.log(person.phone);

  delete person.phone; //Delete keyword deletes property from an object.
  console.log(person.firstName + " has phone number " + person.phone);