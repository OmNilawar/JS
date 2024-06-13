// there are two ways to concanate strings 
const name = "om";
//first
console.log("my name is " + name);

//second
console.log(`my name is ${name}`);

//the second one is the modern way to concatinate or write a string

const temp = new String("Harshitfc")

//there are some prototypes or predefined functions to applay on the given string

//those are as follows:-

//len of string
console.log(temp.length); 

//UPPERCASE
console.log(temp.toUpperCase());

//lowercase
console.log(temp.toLowerCase());

//char at specific location/index
console.log(temp.charAt(2));

//index of char in string
console.log(temp.indexOf('t'));

//break the string
console.log(temp.substring(0,4));

//to trim out the extra spaces
const temp2 = new String("   omkar   ")
console.log(temp2.trim());

//to replace something
const vari ="www.omkar-.com"
console.log(vari.replace('-','.'));

//split the string on basis of sepeator
console.log(vari.split('.'));
//it will give array as a output