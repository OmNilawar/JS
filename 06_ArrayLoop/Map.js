//Map Method :-
//it also traverse through every element and also has callback function to be execute on every element

//it is similar to ForEach
//Ex :-
let arr = [1, 2, 3, 4, 5];
let mappedArr = arr.map((element) => {
    return element * 2;
});

console.log(mappedArr); // Outputs: [2, 4, 6, 8, 10]