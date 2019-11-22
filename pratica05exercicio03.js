

function numerosPares () {
    var n1 = parseInt (primeiroNumero.value);
    var n2 = parseInt (segundoNumero.value);

        while (n1 <= n2) {
            if (n1 % 2 == 0) {
                document.getElementById ("resultado").innerText += " " + n1 + " ";
            }
            n1++;
        }

    n1 = parseInt (primeiroNumero.value);
    n2 = parseInt (segundoNumero.value);


        while (n2 <= n1) {
            if (n2 % 2 == 0) {
                document.getElementById ("resultado").innerText += " " + n2 + " ";
            }
            n2++;

        }
    
}