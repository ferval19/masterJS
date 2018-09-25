(function() {
    'use strict';
    // this function is strict...

    //DOM: Document Object Model

    console.log('yeeeee');

    numeros();
}());



function numeros() {
    var numeros = new Array(6);
    for (var i = 0; i < 6; i++) {
        numeros.push(parseInt(prompt('Introduce numero: ', 0)));
    }
    console.log(numeros);
}