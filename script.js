const operadores = ["^","v",">","<>"];
const letras = ["A","B","C","D","E","F","P","Q","R","S","p","q","r","s"];
var formula = prompt("Escreva uma proposição");

function validar(formula) {
    var parenteses = [];
    var premissas = [];
    var array = formula.split("");
    for (let i=0;i<array.length;i++) {
        for (let j=0;j<letras.length;j++) {
            if (array[i] == letras[j]) {
                if (!contains(premissas,letras[j])) {
                    premissas.push(letras[j])
                    console.log(premissas);
                }
            }
            
        }
    }
}

function contains(array, string) {
    for (let i=0;i<array.length;i++) {
        if (array[i] == string) {
            return true;
        }
    }
    return false;
}


console.log(validar(formula));