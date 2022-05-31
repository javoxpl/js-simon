/*Descrizione:
Visualizzare in pagina (html) 5 numeri casuali.
Avviare un timer di 30 secondi
Dopo 30 secondi, nascondere i numeri.
L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/



/*generatore dei numeri random*/
var numeriDaScoprire = [];

while (numeriDaScoprire.length < 5) {
  var numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
if (!numeriDaScoprire.includes(numeroRandom)) {
    numeriDaScoprire.push(numeroRandom);
}
}

console.log(numeriDaScoprire);

/*l'alert*/
alert('Sbrigati,memorizza questi numeri, hai poco tempo! \nHai 30 secondi:' + '\n' + numeriDaScoprire);

