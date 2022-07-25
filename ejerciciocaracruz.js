

function getRandom(){
    return Math.round(Math.random());;
}

function printRandom(){
   
    const numero = getRandom();
    console.log(numero);
    if(numero === 1){
        console.log ("Es cara.")
    }else {
        console.log ("Es cruz.")
    }
}

printRandom();