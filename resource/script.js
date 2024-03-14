/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

let word = prompt("insert a word");
console.log(word);
console.log(word.length);

function pali (word) {
    for (let i = 0; i < word.length/2; i++){ /* ciclo si ripete numero delle lettere diviso due */
        if (word[i] !== word[word.length-i-1]){ /* confronto fra la prima lettera e l'ultima etc */
            console.log("false")
            
        }else 
        console.log("true")
        return true
    
}}

pali(word);

/* let number = prompt("insert a number");
console.log(number); */

let userNumber = document.getElementById('userNumber');
let evenOdd = document.getElementById('oddEven');
let clickUserNumber = document.getElementById('clickUserNumber');

function sum(a, b) {
    return a + b;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
clickUserNumber.addEventListener('click', function() {
    userNumber = parseInt(userNumber.value);
    evenOdd = evenOdd.value;
    let randomnumber = (getRandomNumber(1,10));
    console.log(randomnumber);
     if (evenOdd === "even" && sum(userNumber, randomnumber) % 2 === 0) {
console.log("win")

     } else if (evenOdd === "odd" && sum(userNumber, randomnumber) % 2 !== 0) {
        console.log ("win")
     } else {console.log("lose")}
     console.log(randomnumber + parseInt(userNumber));
});
