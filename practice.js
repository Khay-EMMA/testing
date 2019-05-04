var today = new Date();
var days = ['monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var day = days[today.getDay()];
var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

var fullDate = 'Today is: ' + day + '.' + '\n' + 'Current time: ' + hour + "" + 'AM' + '' + min + '.' + sec + '';

console.log(fullDate)

function bike(){

}