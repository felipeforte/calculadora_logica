const operadores = ["^","v",">","<>"];
const letras = ["A","B","C","D","E","F","P","Q","R","S","p","q","r","s"];
var formula = prompt("Escreva uma proposição");

function validar(formula) {
    var parenteses = [];
    var premissas = [];
    var array = formula.split("");
    var p_stack = 0;
    var p_start = 0;
    for (let i=0;i<array.length;i++) {
        if (array[i] == "(") {
            p_start = i+1;
            p_stack++;
            // console.log(`p_stack = ${p_stack}, p_start = ${p_start}`)
        }
        if (array[i] == ")") {
            if (p_stack == 0) {
                alert("Erro de sintaxe: Parenteses final sem correspondente inicial")
                return;
            } else if (p_start == i) {
                alert("Erro de sintaxe: Parenteses vazio")
                return;
            }
            premissas.push(formula.substring(p_start,i))
            p_stack--;
            console.log(premissas);
        }
        for (let j=0;j<letras.length;j++) {
            if (array[i] == letras[j]) {
                if (!contains(premissas,letras[j])) {
                    premissas.push(letras[j]);
                    console.log(premissas);
                }
            }
            
        }
    }
}

function checkParenthesis(s) {

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