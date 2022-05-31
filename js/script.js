/*Descrizione:
Visualizzare in pagina (html) 5 numeri casuali.
Avviare un timer di 30 secondi
Dopo 30 secondi, nascondere i numeri.
L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


let divElements = document.getElementById("number");
let click = document.getElementById("myButton");
let resulte = document.getElementById("risultato");
let divTime = document.getElementById("time");
divTime.classList.add("center");
let numbers = [];
let time = 30;

click.addEventListener("click",

    function(){
        for (let i = 0; i < 5; i ++){
            let number = Math.floor(Math.random() * 100) + 1;
            numbers.push(number);
            divElements.innerHTML += " " + number + " ";
        }
        console.log(numbers);

        setInterval(function (){
            if (time === 0){
                clearInterval(time);
                divElements.innerHTML = "Tempo finito";          
                divTime.innerHTML = " ";   
            } else {
                time--;
                divTime.innerHTML = "Hai " + time + " secondi per memorizzarli";
            }
        }
    , 1000)

    let endtime = setInterval(
        function(){
            let numbUser;
            let count = 0;
            let i = 0
            alert("ti ricordi i numeri? (Clicca 'chiudi')");
            while (i < 5){
                numbUser = parseInt(prompt("inserisci un numero"));
                console.log(numbUser);
            
                if(numbers.includes(numbUser)){
                    count++;
            }
    
            i++;
            }
            clearInterval(endtime);
            console.log("Hai indovinato: " + count + " numeri");
            switch (count){
    
                case 5:
                resulte.innerHTML = "Hai indovinato tutti e " + count + " i numeri";
                break;
    
                case 4:
                resulte.innerHTML = "Hai indovinato " + count + " numeri";
                break;
    
                case 3:
                resulte.innerHTML = "Hai indovinato " + count + " numeri";
                break;
    
                case 2:
                resulte.innerHTML = "Hai indovinato " + count + " numeri";
                break;
    
                case 1:
                resulte.innerHTML = "hai indovinato solo un  " + count + " numero";
                break;
    
                case 0:
                resulte.innerHTML = "non hai indovinato nulla";
                break;
            }
        }
    , 12000)
    }
)


