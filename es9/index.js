//lanzada en junio de 2018

const obj = {
    name: "Aaron",
    age: 25,
    country: "PE",
};

let { country, ...all } = obj;
console.log(all);

//Ulilizar las propiedades de propagación 

const obj2 = {
    name: "Aaron",
    age: 25,
}

const obj3 = {
    ...obj2,
    country: "PE",
}

console.log(obj3);

//-------------------------------------

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve("Hello World")
        : reject(new Error("Test Error"))
    });
};

helloWorld();
    then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizo"))

// regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2019-04-20");
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);