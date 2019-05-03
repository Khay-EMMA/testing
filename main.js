//loops
//loops itterate through something;
/*var numbers = [23,34,48,42,3,53];
numbers.forEach(function(numbers){
        console.log(numbers)
});

var numbers = [2,4,42,53,43,65];
for(i=0; i < numbers.length; i++){
    console.log('regina daniels is his ' + numbers[i] + ' wife');
}
var j = 3;
while(j < 5){
    console.log('i ranked position ' + j);
    j++;
}

var var1 = 3;
var var2 = 4;

if(var1 == var2 || var1 == 3){
    console.log('Yeah thats right');
}else{
    console.log('This is false');
}

var fruit = 'mangos';

switch(fruit){
    case "Mango":
        console.log('I hate Mangos');
        break;
    case "apple":
        console.log('I love apples');
        break;
    default:
        console.log('I love all other fruits');
}

//objects

//object literals

var person = {
    firstName: 'Brad',
    lastName: 'Traversy',
    age: 23,
    chidren: ['mike', 'emma'],
fullName: function(){
    return this.firstName + " " + this.lastName;
}
}
console.log(person.fullName());

//object consturctors

var Jane = new Object();
Jane.age = 32;
Jane.firstName = 'Obi';
Jane.lastName = 'Chidinma';

Jane.describe = function(){
   return this.firstName + " " + this.lastName + " " + 'is a year one undergraduate student at ESUT ' + ' and she is ' + " " + this.age + " " + ' years old';
}
console.log(Jane.describe());

//constructor pattern
function details(name,age,school){
    this.name = name;
    this.age = age;
    this.school = school;

    this.describe = function(){
        return 'she is ' + this.name + ' and is ' + this.age + ' years old ' + ' and is a student of ' + this.school;
    }
}
var chidinma = new details('Obi CHidinma', 23, 'Enugu state university of science and technology');
console.log(chidinma.describe());
*/
function changeBackground(x){
    var heading = document.getElementById('heading');
    heading.style.color = x.value;
}

function validateForm(){
    var firstName = document.forms["myForm"]["firstName"].value;
    if(firstName == null || firstName == ""){
        alert("first name is required");
        return false;
    }
    if(firstName.length < 3){
        alert("First name must be at least 3 characters");
    }
}
fun
