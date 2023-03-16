const whichSchool  = function (age) {
  if(age < 13){
    console.log("Elementry School");
  }else if(age >= 13 && age){
    console.log("Secondary School");
  }else {
    console.log("Lighthouse Labs");
  }
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));