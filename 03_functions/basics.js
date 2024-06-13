//basic style to make a function

function speak(){
    console.log("om");
}

//to execute a function 
speak();

//you can also have arguments/params
function add(num1,num2){
    console.log(num1 + num2);
}
add(2,4);

//if we want to store the value in variable then we must return the answer from function

function multiply(num1,num2)
{
    return num1 * num2;
}
const ans = multiply(2,3);
console.log(ans);
//this was the way to store the answer in variable using return keyword

//in function nothing will be executed after the "return" keyword


