var firstName;
console.log(firstName);
firstName = null;
console.log(firstName);


var lastName="Bush";
console.log(lastName);
lastName="Clinton";
console.log(lastName);

//Numeric type / int
var someNumber = 41;
console.log(someNumber)
console.log(typeof someNumber)

// float
var someFloat = 3.1459;
console.log(someFloat)
console.log(typeof someFloat)

//boolean  
var someBool = false;
console.log(someBool);
someBool = true;
console.log(someBool);
someBool = undefined;
console.log(someBool);

// Array (list)
var someArray = [1,2,3];
console.log(someArray)

// Object Variable
var someObject= {'test':'Please Test Me!'};
console.log(someObject)
var key="steve"
// Keys never evaluate!
var testObj={key:123}
console.log(testObj)

var someObject1= {test:'Please Test Me!'};
console.log(someObject1)

var fName = "Steve"
var newObj={fName}
console.log(newObj)


// wierd in JS
console.log(notHere)
var notHere="Steve"
console.log(notHere)

testHoist();
function testHoist(){
    let blah ="blah";
    console.log(blah)
}


// testHoist();
// testHoist1();
let testHoist1=()=>{
    let blah ="blah";
    console.log(blah)
}
testHoist1();

let blah = 123;
blah = 321;

const blah1 = 123
// blah1 = 432  //ERRORR


// MATH
let sum = 5+5;
console.log(sum);//10
sum += 5;
console.log(sum);//15
console.log(sum++, 'rightside');  // sum = sum + 1
console.log(sum);//16
console.log(++sum,'leftside');
console.log(sum);//17

// subtract
let diff = 5 - 5; 
console.log(diff) ;// 0
diff -= 5; // -5
console.log(diff);
diff--;
console.log(diff);

// multiply
let prod = 5*5;
console.log(prod);
prod *=5;
console.log(prod);

// Divide
let divide =5/5
console.log(divide); // 1
console.log(typeof divide);
divide /= 5;
console.log(divide); //.2
console.log(typeof divide);

console.log(parseInt(divide));
console.log(parseFloat('.025'));

// multiply exp
let square = 5**2;
console.log(square); //25
square **=2 
console.log(square); //625

// Floor Div in JS is not built in like python //
// in pyhton it was 5//2 = 2
let floor = Math.floor(5/2);
console.log(floor);

// ceiling
let ceil = Math.ceil(5/2);
console.log(ceil); //3 
ceil = Math.ceil(2.5);
console.log(ceil);


// check this out
let stuff = 3.14 + '4'
console.log(stuff); //3.144
console.log(typeof stuff) //string


let stuff1 = 3.14 + parseInt('4')
console.log(stuff1); //7.14

let stuff2 = 3.14.toString() + "4"
console.log(stuff2) //3.144


