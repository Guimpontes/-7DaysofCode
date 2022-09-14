let adicionarItem = 'sim'

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let proteinas = [];
let graos = [];

while (adicionarItem == 'sim') {

    adicionarItem = prompt('Você deseja adicionar algum item na lista? sim ou não').toLowerCase();

    while (adicionarItem != 'sim' && adicionarItem != 'não') {
        alert('Essa resposta é inválida. Tente novamente');

        adicionarItem = prompt('Você deseja adicionar algum item na lista? sim ou não').toLowerCase();
    }

    if (adicionarItem === 'não') {

        alert(`
               Frutas: 
                  ${frutas}

               laticínios: 
                  ${laticinios} 

               congelados:
                  ${congelados}

               doces: 
                  ${doces}

               Proteínas:
                  ${proteinas}

               grãos: 
                  ${graos}`)

        break;
    }

    let item = prompt('Qual item você gostaria de adicionar?');
    let categoria = prompt('Qual categoria esse item se encaixa? frutas, laticínios, congelados, doces, proteínas ou grãos ').toLowerCase();

    if (categoria == 'frutas') {
        frutas.push(item)
    } else if (categoria == 'laticínios') {
        laticinios.push(item)
    } else if (categoria == 'congelados') {
        doces.push(item);
    } else if (categoria == 'proteínas') {
        proteinas.push(item);
    } else if (categoria == 'grãos') {
        graos.push(item);
    } else {
        alert('Categoria inválida')
    }
}

