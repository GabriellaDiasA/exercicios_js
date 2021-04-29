//Parte A - Aquecimento Arrow Function

//Transforme as funções declarativas abaixo em Arrow Functions
const upperName = function (name) {
    return name.toUpperCase();
};

const upperNameRes = (name) => {
    return name.toUpperCase();
}
function myFunction(p1, p2) {
    return p1 * p2;
}

const myFunctionRes = (p1, p2) => {
    return p1 * p2;
}

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

const toCelsiusRes = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
}

//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
}

const handleMouseMoveRes = (event) => {
    const clientMouse = { clientX:event.clientX, clientY:event.clientY};
    console.log(clientMouse);
}
  
//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };

const objFirst = { first:obj.first };

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
let company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
        shirts: {
            colors: ['red', 'green', 'blue'],
        },
        socks: {
            colors: ['cyan', 'magenta', 'yellow'],
        },
    },
};

let companyName = company.name;
let companyColors = { shirtColor:company.products.shirts.colors, sockColor:company.products.socks.colors };

//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const clothesClone = { ...clothes };

//Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks

//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];

let numbersMap = numbers.map(num => Math.sqrt(num));

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];

let numbersMap2 = numbers.map(num => num * 10);

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];

let agesFilter = ages.filter(age => age >= 18);

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
let data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog',
    },

    {
        name: 'Lizzy',
        age: 6,
        type: 'dog',
    },

    {
        name: 'Red',
        age: 1,
        type: 'cat',
    },

    {
        name: 'Joey',
        age: 3,
        type: 'dog',
    },
];

let dataFilter = data.filter(pet => pet.type == 'dog');

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

let dataAgeSum = dataFilter.reduce((total, cur) => total + cur.age, 0);

//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount = function (company) {
    colors = company.products.shirts.colors;
    return colors.length;
};

const getShirtsColorsAmtArrow = (company) => {
    return company.products.shirts.colors.length;
}

//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothesA = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

let clothesNotPants = {...!clothesA.pants, shirts: clothesA.shirts, socks: clothesA.socks }

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

let arr3 = [...arr.splice(1, arr.length - 1), ...arr2.splice(1, arr2.length - 1)];

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
];

let personsFullName = persons.map(person => `${person.firstname} ${person.lastname}`);