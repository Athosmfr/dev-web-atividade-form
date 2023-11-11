const arrayNumeros = [
    1,
    2,
    3,
    4,
    5
]

// Soma

const numero1 = document.querySelector('#number1');
const numero2 = document.querySelector('#number2');
const numero3 = document.querySelector('#number3');
const resultadoSoma = document.querySelector('#resultado');

function soma(numb1, numb2, numb3) {
    let soma = Number(numb1) + Number(numb2) + Number(numb3)
    return resultadoSoma.textContent = soma;
}

const btnSoma = document.querySelector('.btn-calc-soma');

btnSoma.addEventListener('click', function() {
    soma(numero1.value, numero2.value, numero3.value);
    alert('Operação de soma realizada!')
});

// Multiplicação

const mult1 = document.querySelector('#mult1');
const mult2 = document.querySelector('#mult2');
const resultadoMult = document.querySelector('#resultado-mult');

function multiplicar(num1, num2) {
    let mult = Number(num1) * Number(num2);
    return resultadoMult.textContent = mult;
}

const btnMult = document.querySelector('.btn-calc-mult');

btnMult.addEventListener('click', function() {
    multiplicar(mult1.value, mult2.value);
    alert('Operação de multiplicação realizada!');
})


// Array

const array = document.querySelector('.array');

for (let i = 0; i < arrayNumeros.length; i++) {
    const valor = document.createElement('p');
    valor.textContent = arrayNumeros[i];
    array.appendChild(valor);
}


