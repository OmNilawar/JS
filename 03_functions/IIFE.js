//the full form is immediate invoke function expression
//means you need to call or invoke the function as sson as it is made 
//and the syntax for it is

//()() the first paresthesis isto make the function and the second parenthesis is to execute that funtion

//for ex.
(function name(){
    console.log(`om`);
})();

//you can also make aero functions
( () => {
    console.log(`hello re`);
})();

//if you want to pass parameters/arguments you can pass it in second parenthesis means ()(x)
//the place where x is

((num) => {
    console.log(`the number is ${num}`)
})(2)