// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!")
}
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
function sayHelloToLiz() {
    console.log("Hello, Liz!")
}

function sayHelloToSamip() {
    console.log("Hello, Samip!")
}

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

// Parameters allow our functions to be more flexible
// Parameter names only have meaning to us so they can be anything

function sayHelloTo(firstName) {
    console.log(`Hello ${firstName}!`);
    return `Hello ${firstName}!`
}

sayHelloTo("Guadalupe");
sayHelloTo("Samip");
sayHelloTo("Liz");

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
    return `${greeting}, ${firstName}!`;
  }

  say("Julio", "hello");  

function say(greeting, firstName) {
console.log("firstName: ", firstName);
console.log("greeting: ", greeting);
console.log(`${greeting}, ${firstName}!`);
}

// Return values in JavaScript
function add(x,y) {
    return x + y;
}

console.log(add(3020,2132));

//Practice writing functinos

function stringChange(string){
    console.log(string.split(", "));
    return string.split();
}
stringChange("Bread, Butter, Coffee, Cakes");