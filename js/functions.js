// def name():
//     body
//     return something

// console.log('hello'); console.log('hello2')

function addNums(){
    let num = 4;
    let num2 = 5;
    return num + num2;
};
console.log(addNums()); //9
console.log(typeof addNums()); // number
console.log(typeof addNums);//function


function addNums2(num, num2){
    return num+num2
}
console.log(addNums2(4, 5)); //number


// ES 6+ Arrow Function
// In a one line arrow function the one line is automatically returned
const cubed = () => 3**3;
console.log(cubed())

// same as above but dumb
const cubeda = () => {return 3**3;}
console.log(cubeda())


const cubedb = () => {
    let x = 3
    return x**3;
}
console.log(cubedb())

const cubed2=num=>num**3;
console.log(cubed2(3))

// with one param the parens are optional
const cubed2a=(num)=>num**3;
console.log(cubed2a(3))

const xpower=(x,p)=> x**p;
console.log(xpower(3,3))


// Closure

function my_clousure(){
    let counter = 0;  // creating a private variable
    function add_to_count(){
        counter++;
        return counter
    }
    return add_to_count
}

let add = my_clousure()
console.log(typeof add)

console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())

// anon function 
console.log(
   ( function(nam){
        let hello = 'Hello World ' + nam;
        return hello
    })('Gio')
)


// python f-strings

let number = 666
let my_string = `Your number is ${number/6}`
console.log(my_string)



// Write me a function use the keyword function and again as an arrow function 
// that takes in 3 parameters one of a name, of age and of multiplier
// and return a string that says If I multiple [PERSON's NAME] by [muiltiplier] I get [age x multiplier]

// my_func("steve" , 55, 2)
// "If i multiply Steve's age by 2 I get 110"

function my_func(name,age,multiplier){
    return `If I multiply ${name}’s age by ${multiplier} I get ${age*multiplier}`
 }
console.log(my_func("steve",55,2));

const funk = (name_, age, mult) => `If i multiply ${name_}'s age by ${mult} I get ${age * mult}.`;
console.log(funk('steve', 55, 2))
console.log(typeof funk)
