// JS array Functions

var arr=["AngularJS","Node.js","JQuery","Bootstrap"]    
var result=arr.copyWithin(0,1,2);  
console.log(result);
document.writeln( result);  

document.write("<br>");

var arr=["AngularJS","Node.js","JQuery","Bootstrap"];  
// place from 1st position, the elements after 2nd position.  
var result=arr.copyWithin(1,2);  
document.writeln(result);  

document.write("<br>");

//every function
var marks=[50,40,45,37,20];  
  
function check(value)  
{  
  return value>30;  //return false, as marks[4]=20  
}  
  
document.writeln(marks.every(check));  
document.write("<br>");

//map function

var arr=[2.1,3.5,4.7];  
var result=arr.map(Math.round);  
document.writeln(result);  
document.write("<br>");

//Anonymous
function normale() {  
    console.log('It is a normal function');  
  }  
  normale();  

(function() {  
    console.log('Hello i am an Anonymous function'); 
    document.write("Hello i am an Anonymous function");
})();  

document.write("<br>");
//Timeout function
setTimeout(function () {  
    document.write(' i Execute later after 1 second');
}, 1000);  






document.write("<br>");
// JavaScript to illustrate forEach() method  
function isMore() { 
   var items = [1, 29, 47]; 
   var javaTpoint = []; 
   items.forEach(function(item){ 
       javaTpoint.push(item*2); 
   })
  
   document.write(javaTpoint);
// expected output: arr[Output:2,58,94]  
}
isMore(); 

document.write("<br>");

function showData(name, amt) {
alert(' Hello ' + name + '\n Your entered amount is ' + amt);
}

function getData(callback) {
var name = prompt(" Welcome to the javaTpoint.com \n What is your name?");
var amt = prompt(" Enter some amount...");
callback(name, amt);
}
// getData(showData);

