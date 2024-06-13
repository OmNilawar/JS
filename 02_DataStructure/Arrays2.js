const family = ['aai','papa','didi'];
const friends = ['manu','ritesh','piyush','bangu','yash','mandar','awandhe','adi','vedya'];
const friends2 = ['rohit','malpani','sneh','sahil','parry','tauqeer'];

// family.push(...friends);
// console.log(family.length);

const newFam = [...family,...friends,...friends2];

//the ... used in above code is known as spread opreator and it is used to speard the array elements in indivoul element 
console.log(newFam);

//to check weather it is an array(Bool)
console.log(Array.isArray("OMKAR"));

//to convert anything into array
console.log(Array.from("OMKAR"));

//to convert set of elements into array
console.log(Array.of('Ajij',1,4,5));


// in this segment we learn about concat,spread,and also Array.isArray,Array.from,Array.of ;