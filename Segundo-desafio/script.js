var nome = prompt('Qual é o seu nome?');
var idade = parseInt(prompt('Quantos anos você tem?'));
var linguagem = prompt('Qual linguagem de programação você está estudando?');

// Condição se o usuário não respondeu algumas das perguntas.
if (!nome || !idade || !linguagem) {
    alert('Você não respondeu uma das perguntas. Volte e responda.');

    // Dar um refresh na página.
    window.location.reload()
} else {
    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`);

    // Laço para caso o usuário dar uma resposta diferente de 1 ou 2.
    while (satisfacao != 1 && satisfacao != 2) {
        var satisfacao = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`);

        if (satisfacao == 1) {
            alert('Muito bom! Continue estudando e você terá muito sucesso');
        } else if (satisfacao == 2) {

            // Laço para caso do usuário dar uma resposta diferente de 1 ou 2.
            while (outraLinguagem != 1 && outraLinguagem != 2) {
                var outraLinguagem = prompt('Ahh que pena... Já tentou aprender outras linguagens? Responda com o número 1 para SIM ou 2 para NÃO');

                if (outraLinguagem == 1) {
                    alert('Muito bom! O importante é não desistir.');
                } else if (outraLinguagem == 2) {
                    alert('Então tente achar uma linguagem que você goste, domine ela, mas nunca desista dos seus sonhos.');
                } else {
                    alert('Resposta inválida. Tente novamente')
                }
            }
        } else {
            alert('Resposta inválida.Tente novamente');
        }
    }

    // Encerramento.
    alert('Muito obrigado pela sua participação!')
}

