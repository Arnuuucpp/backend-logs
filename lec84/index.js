console.log("running in index.js")
//How to Run JavaScript Outside the Browser

//syntax: node <space> filename

//like for this  code below


// let array = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }


//now in terminal write node index.js and this code  will run and print the arr elements in the terminal

//2. what are packages
/*
kisi aur developer ne koi code likha hai aur usko hum use krna chahte hai to usko package kehte hai...

this code is available on npmjs.com and we can use it in our project by installing it using npm install <package name> command

for example: 
cat-me is a package 
*/

const catMe = require("cat-me")

console.log(catMe()) //this will return a random cat meow string

