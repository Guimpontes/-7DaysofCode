
// Campo de adicionar um item na lista.
let inputAdicionar = document.querySelector('#inputAdicionar');
let btnAdicionar = document.querySelector('#btn-adicionar');
let listaDeItens = document.querySelector('.lista');

// Campo de adicionar categorias.
let inputCategoria = document.querySelector('#inputCategoria');
let btnAdicionarCategoria = document.querySelector('#btn-adicionar-categoria');
let categoria = document.querySelector('.categorias');

// Adicionar categoria com a tecla enter
inputCategoria.addEventListener('keypress', (e) => {

    //Tecla enter
    if (e.keyCode == 13) {

        //Validando se o input de adicionar uma categoria está vazio.
        if (inputCategoria.value != "") {
            let div = document.createElement('div');

            let input = document.createElement('input');
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'categoria')
            input.setAttribute('onclick', 'filtrarItem(this)')
            input.id = inputCategoria.value;

            let label = document.createElement('label');
            label.setAttribute('for', inputCategoria.value);
            label.setAttribute('name', 'categoria')
            label.textContent = inputCategoria.value;

            div.appendChild(input);
            div.appendChild(label);

            categoria.appendChild(div);

            inputCategoria.value = '';
        } else {
            alert('Você deve preencher o campo com uma categoria.')
        }
    }
})

// Adicionar uma categoria
btnAdicionarCategoria.addEventListener('click', (e) => {

    // Validando se o input de adicionar uma categoria está vazio.
    if (inputCategoria.value != "") {
        let div = document.createElement('div');

        let input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'categoria')
        input.setAttribute('onclick', 'filtrarItem(this)')
        input.id = inputCategoria.value;

        let label = document.createElement('label');
        label.setAttribute('for', inputCategoria.value);
        label.setAttribute('name', 'categoria')
        label.textContent = inputCategoria.value;

        div.appendChild(input);
        div.appendChild(label);

        categoria.appendChild(div);

        inputCategoria.value = '';
    } else {
        alert('Você deve preencher o campo com uma categoria.')
    }
});

// Lista de item
let item = [];

// Função para criar o item da lista.
function criarItem(item, categoria) {
    return { item, categoria }
}

// Função para adicionar o item na lista pressionando a tecla enter.
inputAdicionar.addEventListener('keypress', (e) => {

    //Tecla enter
    if (e.keyCode == 13) {

        //Validando se o usuário criou uma categoria.
        if (categoria.children.length > 0) {

            //Validando se o usuário selecionou uma categoria.
            if (categorias.length > 0) {

                //Validando se o campo de adicionar um item na lista está vazio.
                if (inputAdicionar.value != "") {
                    item.push(criarItem(inputAdicionar.value, categorias[0]))
                    inputAdicionar.value = '';

                    filtrar();
                } else {
                    alert("Você deve preencher o campo com um item.")
                }

            } else {
                alert('Selecione uma categoria.')
            }
        } else {
            alert("Você não tem nenhuma categoria. Crie uma e selecione ela antes de adicionar um item na lista")
        }
    }
})

// Função para adicinar o item na lista clicando o botão adicionar.
btnAdicionar.addEventListener('click', (e) => {

    //Validando se o usuário criou uma categoria.
    if (categoria.children.length > 0) {

        //Validando se o usuário selecionou uma categoria.
        if (categorias.length > 0) {

            //Validando se o campo de adicionar um item na lista está vazio.
            if (inputAdicionar.value != "") {
                item.push(criarItem(inputAdicionar.value, categorias[0]))
                inputAdicionar.value = '';

                filtrar();
            } else {
                alert("Você deve preencher o campo com um item.")
            }

        } else {
            alert('Selecione uma categoria.')
        }
    } else {
        alert("Você não tem nenhuma categoria. Crie uma e selecione ela antes de adicionar um item na lista")
    }

})

function filtrar() {

    //Filtrando os items da lista de acordo com o a categoria selecionada.
    let filterList = item.filter((item) => {
        return item.categoria == categorias[0];
    })

    listaDeItens.innerHTML = filterList.map((item) => `<li>${item.item}</li>`).join(' ');
}


// Lista de categorias
let categorias = [];

// Função para filtrar um item da lista.
function filtrarItem(elemento) {

    categorias = [];

    let includes = categorias.includes(elemento.id);


    if (!includes) {
        categorias.push(elemento.id)
    }

    filtrar();
}