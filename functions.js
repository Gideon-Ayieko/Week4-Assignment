//ASSIGNMENT - WEEK 4
//AUTHOR: GIDEON AYIEKO

//QUESTION 1

function calculateArea(length,width){
    return (length*width);
    
}
let x = calculateArea(10,1);
console.log(x);

//QUESTION 2 - SCOPE EXPLORATION

var globalVar = 100;
function sum(){

    var localVar = 50;
    var z = globalVar + localVar;
    console.log(z);
}
sum();
//EXPLANATION: globalVar is a global variable. It is accessible throughout the program. We can therefore use 
//it inside the function alongside the local variable (localVar).

//QUESTION 3 - CLOSURES AND PRIVATE COUNTERS
function counter(){
    var count = 0;
    function increment(){
        count++;
        console.log(count);
    }

    return increment;
}

var counterIncrement=counter();

counterIncrement();
counterIncrement();
counterIncrement();
counterIncrement();