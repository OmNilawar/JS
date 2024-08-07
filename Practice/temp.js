om();
function om() {
    console.log("hello");
}


const omkar = function(){
    console.log("alien");
}
omkar();

const greet = () => {
    console.log("Hello, World!");
};
greet(); // Outputs: Hello, World!

(function() {
    console.log("Hello, World!");
})(); // Outputs: Hello, World!

const obj = {
    greet() {
        console.log("Hello, World!");
    }
};
obj.greet(); // Outputs: Hello, World!

class Greeter {
    greet() {
        console.log("Hello, World!");
    }
}
const greeter = new Greeter();
greeter.greet(); // Outputs: Hello, World!
