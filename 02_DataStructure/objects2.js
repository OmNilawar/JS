//second method to make an object
//Constructor Method :-
//it provides singleton

const user = new Object();
//it as same as regular declaration of object everything is same

//you can also add object in object as value

const details = {
    fullname : {
        firstname : "omkar",
        middlename : "pravin",
        lastname : "nilawar"
    }
};
//nested object
// console.log(details);

//merge two object into one by spliting them indiviually

const obj1 = {
    name : "omkar",
    ID : 52
};
const obj2 = {
    nickname : "manu",
    roll_no : 23
};

const obj3 = {...obj1,...obj2};
console.log(obj3);

//another method to combine
const obj4 = Object.assign(obj1,obj2);
console.log(obj4);

//syntax is Object.assign(target,sources)

//target is thing where we store the combine result
//if we does not give the {} empty braces as target then the result will store in obj1 in case
//syntax will be Object.assign(obj1,obj2);

//then obj1 will contaion all values of obj1 and obj2.


//if you want to loop through the object to traverse
//you can also convert the object into array using

console.log(Object.keys(obj1));
//this will convert all the keys of obj1 in an array

//for values
console.log(Object.values(obj1));

//for both key and value into array
console.log(Object.entries(obj1));
//it will give array of arrays where every array is a pair of key and value