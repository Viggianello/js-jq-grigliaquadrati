// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

// genero la griglia 5x5
for (var i = 0; i < 25; i++) {
    $('#griglia').append('<div class="quadrato"></div>');
}

// Scrivo un numero random tra 0 e 10 dentro ogni quadrato.
// uso la funzione each cosi mi imposta di defoult il ciclo prendendo tutti gli elementi di volta in volta
$('.quadrato').each(function() {
    // genero il numero random da 0 a 10.
    var numero_random = genera_random(0, 10);
    // stampo in console tutti i numeri
    console.log(numero_random);
    // inserisco nel html in ogni quadrato il numero random generato prima
    $(this).append(numero_random);
    // controllo se il numero è pari e diverso da zero
    if (is_pari(numero_random) && numero_random != 0) {
        // allora lo scrivo rosso aggiungendogli la classe apposita
        $(this).addClass('rosso');
    } else if (numero_random == 0) {
        // lo scivo in verde se è zero
        $(this).addClass('verde');
    }
    // essendo dispari e nero è il colore di defoult verrano scritti in nero tutti i numeri dispari
});

function genera_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creo la funzione per vedere se il numero è pari o dispari
function is_pari(numero) {
    var resto = numero % 2;
    if ( resto == 0) {
        return true; // se è pari mi restituisce true
    } else {
        return false; // se è dispari mi restituisce false
    }
}
