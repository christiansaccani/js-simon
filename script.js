// getTime() mi ristituisce il tempo in ms che intercorre sino alla data da me indicata
var countDownDay = new Date("Jan 5, 2024 15:37:25").getTime();

// Trovo il corrispettivo del valore precedente del momento in cui avvio la pagina
var now = new Date().getTime();

// La differenza tra l'ora da raggiungere e quella attuale in ms
var timeDiff = countDownDay - now;

// questo rieseguirà la mia funzione ogni secondo;
setInterval (counterTimer, 1000);

function counterTimer () {
    // console.log(timeDiff);
}

