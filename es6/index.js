function newFunction(name, age, country) {
    var name = name || "Aaron";
    var age = age || "25";
    var country = country || "Perú";
    console.log(name,age,country);
}

//es6

function newFunction2(name = "Aaron", age = 25, country="Perú"){
    console.log(name,age,country);
};


//para Ejecutar: 

newFunction2();
newFunction2("Aaron", 25, "Perú");

//TEMPLATES --> unir o separar elementos

let hello = "Hello";
let world = "World";
let epicPhrase =  hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`; //ALT + 96
console.log(epicPhrase2);

//MULTILINEA ANTES 

let lorem = "Una frase épica para el lorem" + "otra frase más"

//MULTILINEAS AHORA

let lorem2 = `otra frase épica que necesitamos
ahora es otra frase épica
`;

console.log(lorem2);

//DESTRUCTURACIÓN DE ELEMENTOS

let person = {
    "name": "Aaron",
    "age": 25,
    "country": "PE"
}

console.log(person.name, person.country);

let { name, age, country} = person;
console.log(age, country);


//OPERADOR DE PROPAGACIÓN 
//Unión de elementos de manera más amigable
let team1 = ["Aaron", "German", "Jeyrol"];
let team2 = ["Pedro", "Juan", "Diego"];

let education = ["Guille", ...team2, ...team1];

console.log(education);

//Elemento para guardar será LET ------------> GLOBAL Y SCOPE

{
    var global = "Global VAR";
}

{
    let globalLet = "Global LET";
    console.log(globalLet);
}

console.log(global);

const a = "b"; //const no va a cambiar su valor

//asignar obj de manera resumida

let name = "Aaron";
let age = 25;

obj = {name: name, age: age};

obj2 = {name, age};
console.log(obj2);

//ARROW FUNCTION
const names = [
    {name: "Pedro", age: 25}
    {name: "Camilo", age: 32}
]

let listOfNames = names.map(function(item){
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name));
 
let listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

//funcion la cual recibe un valor, multiplicando el valor asimismo que retornará

const square = num => num * num;

//promesas --> ASINCRONISMO (va ejecutando elemento x elemento)

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(true) {
            resolve("Hey!");
        }else{
            reject("Ups!");
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

    //UTILIZAR PARA HACER PETICIONES EN UNA API (CURSO DE ASINCRONISMO)

    //------------------------------------------------------------------

    //CLASES, MODULOS Y GENERADORES

    class calculator {
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculator();
    console.log(calc.sum(564, 2));

//-----------------------------------------------
import { hello } from "./module";

hello();

function* helloWorld() {
    if(true) {
        yield "Hello, "; //permite retornar algo
    }
    if(true) {
        yield "World";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//-------------------------------------------
