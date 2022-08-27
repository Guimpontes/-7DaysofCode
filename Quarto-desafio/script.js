let num = Math.floor(Math.random() * 10);
let tentativa = 3;

while (tentativa > 0) {
    let res = parseInt(prompt("Escolha um número em 0 e 10."));

    if (res == num) {
        alert('Parabéns você acertou o número');
        tentativa = 0
    } else {
        tentativa--
        alert(`Que pena, você errou! Você tem ${tentativa} tentativas.`);
    }
}
alert(`Era o número ${num}`);
window.location.reload();
