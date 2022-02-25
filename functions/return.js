function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  let age = 17;
  if ( checkAge(age) ) {
    console.log( 'Access granted' );
  } else {
    console.log( 'Access denied' );
  } 