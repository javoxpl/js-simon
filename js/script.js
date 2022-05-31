/*Descrizione:
Visualizzare in pagina (html) 5 numeri casuali.
Avviare un timer di 30 secondi
Dopo 30 secondi, nascondere i numeri.
L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/



/*generatore dei numeri random*/
let numeriDaScoprire = [];

while (numeriDaScoprire.length < 5) {
  var numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
if (!numeriDaScoprire.includes(numeroRandom)) {
    numeriDaScoprire.push(numeroRandom);
}
}

console.log(numeriDaScoprire);

function funzioneAlert() {
    alert('Sbrigati,memorizza questi numeri, hai poco tempo! \nHai 30 secondi:' + '\n' + numeriDaScoprire);

setTimeout(funzioneAlert,5000); }


let numeriUtente =[];

setTimeout(function richiesta() {
    for (var i = 0; i < 5; i++) {
        let chiediNumero = parseInt(prompt('Inserisci un numero!'));
        if (!numeriUtente.includes(chiediNumero) && numeriDaScoprire.includes(chiediNumero)) {
            numeriUtente.push(chiediNumero);
        }
    } 
;

console.log(numeriUtente);

if (numeriUtente.length == 0) {
    console.log('non hai indovinato nessun numero')
} else if (numeriUtente.length == 1) {
    console.log('Hai indovinato solo un numero, il numero: ' + numeriUtente)
} else if (numeriUtente.length == 5) {
    console.log('hai indovinato tutti i numeri: ' + numeriUtente)
} else {
    console.log('Hai indovinato ' + numeriUtente.length + ' numeri e sono: ' + numeriUtente);
}
}
, 5000);