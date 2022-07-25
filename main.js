

function infoPerson () {
    let name = "Abril";
    let surname = "Ramos";
    let studies = true;
    console.log(name, surname, "estudios=",studies);
};
const printElement = (item) =>{console.log};

var array = [1, 2, 3, 4, 5];

const imprimirArrays = function (...array){
    array.forEach(element => {
        console.log(element)
    });
};
infoPerson();
imprimirArrays(1,2,3,4,5);