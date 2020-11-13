// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65



// da stabilire km e età:

var km = prompt("Quanti km intende fare?");
console.log(km);

var age = prompt("Quanti anni ha il passeggero?");
console.log(age);

var prezzoPerKilometro = (0.21);
console.log(prezzoPerKilometro);

var prezzo = prezzoPerKilometro * km;
console.log(prezzo);

var scontoMinorenne = prezzo - (prezzo / 100 * 20);
console.log(scontoMinorenne);

var scontoover65 = prezzo - (prezzo / 100 * 40);
console.log(scontoover65);

//alert("Il costo del biglietto sarà di : " + prezzo);

//applicazioni sconti

var prezzoMinorenne;
if (age < 18) {
  console.log("sconto del 20%: ");
  alert("Con 'sconto Minorenne' è stato applicato uno sconto del 20%: L'importo attuale è di " + scontoMinorenne + " €")
} else {
  console.log("Biglietto Standard: " + prezzo);
}

var prezzoover65;
if (age > 65) {
  console.log("Con 'sconto over65' è stato applicato uno sconto del 40%: " + scontoover65);
  alert("Con 'sconto Over65' è stato applicato uno sconto del 40%: L'importo attuale è di " + scontoover65 + " €")
} else {
  console.log("Biglietto Standard : " + prezzo);
}
