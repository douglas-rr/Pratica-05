var base, altura, baseMenor, baseMaior, resultado;
var operacao = parseInt (prompt ("Informe o código da operação desejada: \n \n" + 
                                    "[1] Área do Retângulo \n" + 
                                    "[2] Área do Triângulo \n" + 
                                    "[3] Área do Trapézio \n"));

switch (operacao) {
    case 1:
        base = prompt ("Informe a base: ");
        altura = prompt ("Informe a altura: ")
        resultado = base * altura;
        document.write ("O valor da área do retângulo é " + resultado + ".");
        break;
    case 2:
        base = prompt ("Informe a base: ");
        altura = prompt ("Informe a altura: ")
        resultado = (base * altura) / 2 ;
        document.write ("O valor da área do triângulo é " + resultado + ".");
        break;
    case 3:
        baseMaior = prompt ("Informe a base maior:");
        baseMenor = prompt ("Informe a base menor:");
        altura = prompt ("Informe a altura:")
        resultado = [(baseMaior * baseMenor) * altura] / 2 ;
        document.write ("O valor da área do trapézio é " + resultado + ".");       
    default:
        alert ("Código inválido!");
}