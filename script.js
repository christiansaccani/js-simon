// getTime() mi ristituisce il tempo in ms che intercorre sino alla data da me indicata
var countDownDay = new Date("Feb 12, 2024 09:30:00").getTime();

// questo rieseguirà la mia funzione ogni secondo;
setInterval (counterTimer, 1000);

function counterTimer () {

    // Trovo il corrispettivo del valore precedente del momento in cui avvio la pagina
    var now = new Date().getTime();

    // La differenza tra l'ora da raggiungere e quella attuale in ms
    var timeDiff = countDownDay - now;

    // calcolo in unità di misura partendo dai ms
    // il primo calcolo considera quanti, ad es secondi, sono necessari a fare un minuto;
    // il secondo per risalire a quanti ms sono necessari per fare l'unità di misura.
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    document.querySelector("div").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
}

