// {
//   const message = "selam";
// }

// lexical scope
// console.log(message);
// console.log(this);

// ikisinide yazdırır : 3
// sadece türkay yazdırır : 1

var name = "murat";

//hoisting -> yukarı taşıma, functional scopun en başına taşıma

function print(age) {
  var age;
  if (age > 20) {
    age = 18;
    let name = "turkay";
    console.log(name);
  }
  if (name === "murat") {
    console.log("hi murat", age);
  }
}

print(24);
