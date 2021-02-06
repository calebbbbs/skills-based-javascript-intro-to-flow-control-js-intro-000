function basicTeenager(age) { //accepts an age as a parameter. The function should contain an if-statement that checks to see if the age is a teenager. If the age is between 13 and 19, return `"You are a teenager!"`
  if(age >= 13 && age <= 19){
    return "You are a teenager!"
  }
}

function teenager(age) {//Define a function teenager that accepts an age as a parameter. If the age is between 13 and 19 it should return "You are a teenager!". Otherwise, the function should return "You are not a teenager"
  if(age >= 13 && age <= 19){
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {// If the age is between 13-19 it should return `"You are a teenager!"`. If the age is 12 or below, it should return `"You are a kid"`. If the age is above 19, it should return `"You are a grownup"`
  if (age >=13 && age <= 19){
    return "You are a teenager!"
  } else if (age <=12){
    return "You are a kid"
  } else{
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {//The body of the function should use the ternary operator to return `"You are a teenager"` if age is between 13-19 and returns `"You are not a teenager"` if the age is anything else.
  if (age >= 13 && age <= 19) ? return "You are a teenager": return "You are not a teenager"
}

function switchAge(age) {

}
