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

function pali () {
    for (let i = 0; i < word.length; i++){
        if (word[i] === word[word.length-1]){
            console.log("true")
        }
    }
    return true
}