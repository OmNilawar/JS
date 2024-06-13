//lets first learn about this keyword

const user = {
    username : "om",
    age : 20,
    welcome : function(){
        console.log(`${this.username},welcome to community`)
    }
}
console.log(user);
//this keyword is use to access variables of that scope means in the above function the this keyword of function can access the variable of that object 
//because it a scope {}

//this can be used to access variables of objectwe can access variable of function for ex.

function chai(){
    let user = "om";
    console.log(this.user);
}
chai();
//this will show undefined because it cant access variables of function

//now to have have your first aero function
//this is the syntax for aero fun

const add = (num1,num2) => {
    return num1 + num2;
}

//now there are two type of return implicit and explicit 
//explicit return means like above function as use must use a return keyword to return the ans and for that use must use barces {}
//implicit return means you dont need to have a return keyword to return the ans and for that use must use parenthesis ()

const guna = (num1,num2) => ( num1 + num2 )
//this is implicit type of return function

/* 
explicit :- { } use return keyword
implicit :- ( ) dont use return keyword
*/