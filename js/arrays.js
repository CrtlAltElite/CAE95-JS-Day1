// Arrays AKA python Lists
let grpONames =['sarah', 'Shayne','francisco', 'andre', 'dmitry']

// francisco
console.log(grpONames[2])

//DOES NOT WORK
console.log(grpONames[-1]) // Does not work

//Array destructing
let [sarah, shayne, fran, andre, dmitry]=grpONames
console.log(sarah)
console.log(dmitry)
console.log("============================")
// looping through an array inline

grpONames.forEach((name_)=>console.log(name_))

console.log(grpONames.toString())

// ' ,'.join(grpONames) in python
console.log(grpONames.join(', '))

// .slice()  
// my_list[2:4] in python
console.log(grpONames.slice(2,4))

// .splice()   start index, number of removes, thing to spice in
grpONames.splice(1,0,'Jody')
console.log(grpONames)

// my_list.append(element) in python

console.log(grpONames)
console.log(grpONames.push('dylan') > 8)// gives back the lenght of the array
console.log(grpONames)


console.log(grpONames.pop())
console.log(grpONames)

console.log(grpONames.indexOf("Jody")) // 1
console.log(grpONames.indexOf("Gio")) // -1 not included

const nums =[2,4,6,8,10]

// .shift is pop for the left side
let shiftedNum = nums.shift() 
console.log(shiftedNum) // 2
console.log(nums)
nums.unshift(123) // adds at index 0
console.log(nums)

// 2 kinds of equality in JS

console.log(1==1)
console.log(1=='1') // True ... double equals compares VALUES!!!!!
console.log(1==='1') //False this will check the type and the value!
console.log(1===1)



//map reduce and filter
let bigNameList = [
    "Shayne", "Sarah", "CoolNickName2", "Fancisco", "Andre","Dmitry", "Jody",
     "Sir StinksAlot", "AlphaIs", "Alex"
    ]

let aNames = bigNameList.map(
    (nam)=>{
        if (nam[0].toLowerCase()=='a'){
            return nam;
        }else{
            return 'Name not an a name';
        };
    }
);

console.log(aNames)    

// reduce

const nums1 =[2,4,6,8,10]
let numsSum=nums1.reduce(
    (accumulator, currentNum)=>accumulator+currentNum
)
console.log(numsSum)


//filter
let aNames2=bigNameList.filter(
    nam=>nam[0].toLowerCase() == 'a'
)
console.log(aNames2)