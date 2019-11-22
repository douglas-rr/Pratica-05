function somar () {
    var n1 = document.getElementById ("primeiroNumero").value;
    var n2 = document.getElementById ("segundoNumero").value;
    var soma = parseInt (n1) + parseInt (n2);
    document.getElementById ("resultado").innerHTML = soma;
}

function subtrair () {
    n1 = document.getElementById ("primeiroNumero").value;
    n2 = document.getElementById ("segundoNumero").value;
    var subtrair = parseInt (n1) - parseInt (n2);
    document.getElementById ("resultado").innerHTML = subtrair;
}

function multiplicar () {
    n1 = document.getElementById ("primeiroNumero").value;
    n2 = document.getElementById ("segundoNumero").value;
    var multiplicar = parseInt (n1) * parseInt (n2);
    document.getElementById ("resultado").innerHTML = multiplicar;
}
function dividir () {
    n1 = document.getElementById ("primeiroNumero").value;
    n2 = document.getElementById ("segundoNumero").value;
    var dividir = parseInt (n1) / parseInt (n2);
    document.getElementById ("resultado").innerHTML = dividir;
}

function potencializar () {
    n1 = document.getElementById ("primeiroNumero").value;
    n2 = document.getElementById ("segundoNumero").value;
    var potencializar = Math.pow (parseInt (n1), parseInt (n2));
    document.getElementById ("resultado").innerHTML = potencializar;
}