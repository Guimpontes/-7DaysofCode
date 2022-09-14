let adicionarItem = 'sim'

let lista = []
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let proteinas = [];
let graos = [];

while (adicionarItem == 'sim' || adicionarItem == 'remover') {

    adicionarItem = prompt('Você deseja adicionar algum item na lista? Responda sim ou não. Caso queira remover algum item digite "remover".').toLowerCase();

    while (adicionarItem != 'sim' && adicionarItem != 'não' && adicionarItem != 'remover') {
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

    if (adicionarItem == 'sim') {
        let item = prompt('Qual item você gostaria de adicionar?');
        let categoria = prompt('Qual categoria esse item se encaixa? frutas, laticínios, congelados, doces, proteínas ou grãos ').toLowerCase();
    
        if (categoria == 'frutas') {
            frutas.push(item);
            lista.push(item);
        } else if (categoria == 'laticínios') {
            laticinios.push(item)
            lista.push(item);
        } else if (categoria == 'congelados') {
            doces.push(item);
            lista.push(item);
        } else if (categoria == 'proteínas') {
            proteinas.push(item);
            lista.push(item);
        } else if (categoria == 'grãos') {
            graos.push(item);
            lista.push(item);
        } else {
            alert('Categoria inválida')
        }
    }

    if (adicionarItem == 'remover') {
        let itemRemover = prompt('Qual item você gostaria de remover');

        let incluso = lista.includes(itemRemover);

        if (incluso) {
            frutas = frutas.filter((item) => {
                return item != itemRemover
            })
    
            laticinios = laticinios.filter((item) => {
                return item != itemRemover
            })
    
            congelados = congelados.filter((item) => {
                return item != itemRemover
            })
    
            doces = doces.filter((item) => {
                return item != itemRemover
            })
    
            proteinas = proteinas.filter((item) => {
                return item != itemRemover
            })
    
            graos = graos.filter((item) => {
                return item != itemRemover
            })
        } else {
            alert('Esse item não existe na lista')
        }
        
    }
}

