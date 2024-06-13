// first way to make an object;
//not singleton

//Object :- they are nothing just collection of key-value pair where key should be always unique and value could be anything
//to get value we must access key of that value

const ID = {
    name : "omkar",
    age : 20,
    fullname : "omkar pravin nilawar",
    balance : 1200,
    DOB : `1 july 2003`
};

//there are two ways to access the pair/key
//1.
console.log(ID.DOB);

//2.
console.log(ID["DOB"]);

//if you want to add new pair 
ID.fulu = "hello";

console.log(ID);

//if you want to lock your object from having any further changes then you can freeze it

// Object.freeze(ID);
// ID.name = "yella";
// console.log("after change ",ID)
// it did not changed

//to check if object is frozen or not(Bool)
console.log(Object.isFrozen(ID));

//you can also pass function as value to the key

ID.welcome = function(){
    console.log(`Hi ${this.name}, welcome to Dashboard`)
};
//"this" opreator to access all the properties/key available in that scope or object
console.log(ID.welcome());
//remember if we have function as value then we must use the parenthesis() to access the value as function from key

//we learn about object creation, manipulation,access,"this" opreator