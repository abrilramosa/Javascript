// Parte 1: Replace a for o

function replaceLetters(frase){
    frase=frase.replaceAll("a","o");
    frase=frase.replaceAll("A","O");

    return frase;
}

console.log(replaceLetters("Abril Ramos Aran"));

// Parte 2: 
function identify(frase){
    console.log(frase.startsWith("aca"));
}

identify("academia");
identify("escuela");

function saludar(frase){
    return (frase+ " ").repeat(3);
    }

console.log(saludar("Hola"));


