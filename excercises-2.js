// ---------------------
// Define a function max() that takes two numbers as 
// arguments and returns the largest of them. Use the 
// if-then-else construct available in JavaScript.
// ---------------------

function max(a,b) {
    if (a > b) {
        return a
    }

    else { 
        return b
    }
}

console.assert(max(2,3) === 3)
console.assert(max(23,24) === 24)
console.assert(max(-23, 12) === 12)

// ---------------------
// Define a function maxOfThree() that takes three 
// numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c) {

    return max(a,b,c)

}

console.assert(maxOfThree(2,56,3) === 56)
console.assert(maxOfThree(12,3,4) === 12)
console.assert(maxOfThree(-12,4,-5) === 4)

// ---------------------
// Write a function isVowel() that takes a character (i.e. a 
// string of length 1) and returns true if it is a 
// vowel, false otherwise.
// ---------------------

// function isVowel(input) {

// var a = input.toString().toLowerCase()
     
// var vowels = "aeiou"

// return vowels.includes(a)
// }


// console.assert(isVowel(0) === false);
// console.assert(isVowel("B") === false);
// console.assert(isVowel("b") === false);
// console.assert(isVowel("a") === true);
// console.assert(isVowel("E") === true);
// console.assert(isVowel("2") === false)

// ---------------------
// Write a function rovarspraket() that will translate 
// a text into "Rovarspraket". That is, double every 
// consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return 
// the string "tothohisos isos fofunon".
// ---------------------


function isVowel(input) {

    var a = input.toString().toLowerCase()
         
    var vowels = "aeiou"
    
    return vowels.includes(a)
    }

function rovarspraket(input){
    var str = ''
     if(typeof input !== 'string'){
         return input + ''
     }else{
        for (i=0 ; i<= input.length ; ++i) {
            if(isVowel(input[i])){
                str += input[i]
            }else{
                str += input[i] + 'o' + input[i]
            }
        }
        

    

    

     }

    

    return str



}




console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")


// ---------------------
// Define a function reverse() that computes the reversal 
// of a string. For example, reverse("jag testar") should 
// return the string "ratset gaj".
// ---------------------
// function reverse(str) {

//     return str.split('').reverse().join('')

// }

// console.assert(reverse("books") === "skoob")
// console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")