const profissao = prompt('Você vai seguir para área de Front-End ou seguir para a área de Back-End?').toLowerCase();


if (profissao == 'front-end') {
    const linguagemFrontEnd = prompt('Você gostaria de aprender React ou aprender Vue?');

    const especializar = prompt('Você vai seguir na área de Front-End ou vai seguir se desenvolvendo para atuar na área de Fullstack?')

} else if (profissao == 'back-end') {
    const linguagemBackEnd = prompt('Você gostaria de aprender C# ou aprender Java?');

    const especializar = prompt('Você vai seguir na área de Back-End ou vai seguir se desenvolvendo para atuar na área de Fullstack?')
} else {
    alert('Opção inválida. Tente novamente');

    window.location.reload();
}

let tecnologias = prompt('Quais dessas tecnologias você gostaria de se especializar o aprender? Python, Javascript, jQuery, ruby ou Angular?');

let maisUma = prompt('Tem mais alguma tecnologia que você gostaria de aprender? 2 para NÃO');


while (maisUma != 2) {
    maisUma = prompt('Tem mais alguma tecnologia que você gostaria de aprender? 2 para NÃO').toLowerCase();

    if(maisUma == 'python') {
        alert('Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.')
    } else if (maisUma == 'javascript') {
        alert('JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.')
    } else if (maisUma == 'jquery') {
        alert('jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.')
    } else if (maisUma == 'ruby') {
        alert('Ruby é uma linguagem de programação interpretada multiparadigma, de tipagem dinâmica e forte, com gerenciamento de memória automático, originalmente planejada e desenvolvida no Japão em 1995, por Yukihiro "Matz" Matsumoto, para ser usada como linguagem de script.')
    } else if (maisUma == 'angular') {
        alert('Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu.')
    } 
}

alert('Muito obrigado pela sua participação.');
