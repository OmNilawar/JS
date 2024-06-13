//these are conditional statements that allow us to make decisions in our code

//if statement
if(true)
    {
        console.log("This is true");
    }
    
    //the code will run only if the condition is true
    //iv it is not true then it will go into else block 
    
    const num = 20;
    if(num%2 == 0)
    {
        console.log("Even Number");
    }
    else
    {
        console.log("Odd Number");
    }
    
    
    //there are also some opreators
    
    //&& -> which is used to check if both the conditions are true
    if(2 == 2 && true) console.log("Both are true");
    
    //|| -> which is used to check if any one of the condition is true
    if(2 == 2 || false) console.log("One is true");
    
    //== -> which is used to check if the values are equal
    if(2 == "2") console.log("Equal");
    
    //=== -> which is used to check if the values and the data type are equal
    if(2 === 2) console.log("Equal");
    
    //!= -> which is used to check if the values are not equal
    if(2 != 3) console.log("Not Equal");
    
    //!== -> which is used to check if the values and the data type are not equal
    if(2 !== "2") console.log("Not Equal");
    
    //> -> which is used to check if the value is greater than
    if(2 > 1) console.log("Greater");
    
    //< -> which is used to check if the value is lesser than
    if(2 < 3) console.log("Lesser");
    
    //>= -> which is used to check if the value is greater than or equal to
    if(2 >= 2) console.log("Greater than or Equal");
    
    //<= -> which is used to check if the value is lesser than or equal to
    if(2 <= 3) console.log("Lesser than or Equal");
    