//Matrices
const data = {
    frontend: "Aaron",
    backend: "Sergio",
    design: "Sebas",
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
//.length

//Object varios
//arreglo de strings con los valores, ignorando la asignación del object
const data = {
    frontend: "Aaron",
    backend: "Sergio",
    design: "Sebas",
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//agregar cadena vacia o elementos al string
const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(15, "----"));

//Async Await --> Una de las características más importantes
//funcion, promesa e invocación

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();

try {
    
} catch (error)  {
    
}

try {

} catch {
    
}