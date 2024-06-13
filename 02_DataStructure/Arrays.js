//we can store any type of element in an array of JS;
//it is also expandable
//it has shallow copy means it is pass by reference

//there are two ways to create array

//1.
const arr1 = [1,2,4,'om','$'];

//2.
const arr2 = new Array(1,3,5,6,'manu');

//Array Methods :-

//to find length/size
console.log(arr1.length);

//to push any element
arr1.push(7);
console.log(arr1);

//to pop (pplicable only backwards)
arr1.pop();
console.log(arr1);

//to push element from front we use
arr1.unshift(8);
console.log(arr1);

//to remove the front element
arr1.shift();
console.log(arr1);

//any element present or not (Bool)
console.log(arr1.includes('$'));

//index of given element
console.log(arr1.indexOf('$'));
//if not exist in array then it will return -1

//there are now two main methods
//slice and splice
const temp = [2,4,6,8,0];
console.log('A ',temp);
//slice :- it print the portion of array at given range and it does not manipulate the array means it works on copy of array also in (x,y) it will negelate y parameter and include x parameter

console.log(temp.slice(1,3));
console.log('B ',temp);

//splice :- it will also print the copy of the array while including both the parameters and it will also manipulate the origial array as it pass by reference

console.log(temp.splice(1,3));
console.log('C ',temp);