//If the text parameter is not passed, it will get the value "Unknown"

function showMessage(name, surname = "Unknown") {
    console.log( "Hello " + name + " " + surname);
  }
  showMessage("Petar");
  showMessage("Petar", "Perić");
  showMessage("Marko", "Petrović", "Marković"); // last argument will be ignored
  
  
  var myVar = "global";                          // Declare a global variable
      function checkScope( ) {
          var myVar = "local";                    // Declare a local variable
          console.log(myVar);
  }
  checkScope();