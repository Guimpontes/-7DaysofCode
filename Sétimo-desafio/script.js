let operacao = true

function soma(x, y) {
    return x + y
}

function sub(x, y) {
    return x - y
}

function mult(x, y) {
    return x * y
}

function div(x, y) {
    return x / y
}

while (operacao != 'sair') {

    operacao = prompt("Qual operação você gostaria de utilizar? Responda: soma, subtração, multiplicação, divisão ou sair");

    while (operacao != 'soma' && operacao != 'subtração' && operacao != 'multiplicação' && operacao != 'divisão' && operacao != 'sair') {

        alert('Opção inválida');

        operacao = prompt("Qual operação você gostaria de utilizar? Responda: soma, subtração, multiplicação, divisão ou sair");

    }

    if (operacao == 'sair') {

        alert('Até a próxima')

        break
    }

    let num1 = Number(prompt('Qual o primerio número?'));
    let num2 = Number(prompt('Qual o segundo número?'));

    while (num1 == '' || num2 == '') {
        alert('Preencha todos os campos')

        num1 = Number(prompt('Qual o primerio número?'));
        num2 = Number(prompt('Qual o segundo número?'));
    }

    if (operacao == 'soma') {
        alert(soma(num1, num2));
    } else if (operacao == 'subtração') {
        alert(sub(num1, num2))
    } else if (operacao == 'multiplicação') {
        alert(mult(num1, num2))
    } else if (operacao == 'divisão') {
        alert(div(num1, num2))
    } else {
        alert('Opção inválida')
    }
}



