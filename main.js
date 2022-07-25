let name = "Abril";
let edad = 23;
let studies = true;
let car = null;
let houses = undefined;
let country = Symbol ('flag of Catalunya');
let persona = {name, edad, studies, car, houses, country};

console.log(persona);

const infoPersona = function (){
    console.log (name);
    console.log (typeof name);

    console.log (edad);
    console.log (typeof edad);

    console.log (car);
    console.log (typeof car);

    console.log (houses);
    console.log (typeof houses);

    console.log (country);
    console.log (typeof country);
}

infoPersona ();
console.log(infoPersona());
