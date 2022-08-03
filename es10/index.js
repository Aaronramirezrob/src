//Junio 2019
let array = [1,2,3, [1,2,3, [1,2,3]]];
//valor de profundidad para saber con que array trabajar
console.log(array.flat(2));

let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value => [value, value * 2]));

//Eliminar espacios en blanco de un string

let hello = "                 hello world";
console.log(hello);
console.log(hello.trimStart());

let hello = "hello World                  ";
console.log(hello);
console.log(hello.trimEnd());


//optional catch building

try {
    
} catch {
    error 
}

let entries = [["Name", "aaron" ], ["age", 32]];

console.log(Object.fromEntries(entries));


let mySimbl = "My Symbol";
let symbol = Symbol(mySimbl);

console.log(symbol.description);

