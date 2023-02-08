//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        otherwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function allDish(person){

    for(let i in person){
        if(Array.isArray(person[i])){
            console.log(`My favourite dish are: `)
            console.log(`${i}: `)
            for(let j in person[i]){
                if (typeof person[i][j] === "object"){
                    for(let k in person[i][j]){
                        console.log(`${k} :  ${person[i][j][k]}`)
                    }
                }
                else if (typeof person[i] === "object"){
                    console.log(person[i][j])
                }
            }
        console.log("\n")
        }
        else{
            console.log(`My favourite dish are: `)

            console.log(`${i}: `)
            console.log(`${person[i]}\n `)

        }
    }
}

allDish(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name
    this.age = age
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    };

    this.addAge = (n) => {
        this.age += n
    };

};



let person = new Person("Frodo Baggin", 30);
let person1 = new Person("Sam Wise", 31)
person.printInfo();
person.addAge(3);
person.printInfo();
person1.printInfo()
person1.addAge(3)







// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkS = (n) => {
    return new Promise( (resolve,reject) => {
        if (n > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

function checkString(word) {
    checkS(word.length)
    .then( (result) => {
        console.log('Big word')
    })
    .catch( (error) => {
        console.log('Small Number')
    })


}

checkString("TomandJerryarebestfreinds")


//Codewars1

//https://www.codewars.com/kata/5168bb5dfe9a00b126000018

//Reversed Strings 

function solution(str){

    let result = ''
    
    for (let i of str) {
        result = i + result
    }

    return result
}

//Codewars2

//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

//Highest and Lows

function highAndLow(numbers) {
    numbers = numbers.split(' ')
    return `${Math.max(numbers)} ${Math.min(numbers)}`
}