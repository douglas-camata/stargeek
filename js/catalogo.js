var listaMidias = []
listaMidias = JSON.parse(localStorage.getItem('bdMidiasStarGeek'))
if (listaMidias == null){
    listaMidias = []
}

function validarCadastro(titulo, imagem){
    if (titulo == '' || imagem == '') {
        alert ('Verifique os dados cadastrados. Não pode ter campos vazio.')
        return false
    }
    return true
}

function botaoCadastroMidia() {
    var nome = document.getElementById("titulo").value
    var categoria = document.getElementById("categoria").value
    var imagem = document.getElementById("imagem").value
    var gif = document.getElementById("gif").value
    
    var possoCadastrar = validarCadastro(nome, imagem)
    if (possoCadastrar == false) {
        return false
    }
    
    var objMidia = {
        titulo: nome,
        categoria: categoria,
        link: imagem,
        linkgif : gif
    }
    listaMidias.push(objMidia)
    localStorage.setItem( 'bdMidiasStarGeek', JSON.stringify(listaMidias)) 

    alert ('Mídia cadastra com sucesso')
    window.location.href = 'catalogo.html'

}

function exibirCatalogoFilmes() {
    document.getElementById('listaFilmes').innerHTML = ''
    document.getElementById('listaSeries').innerHTML = ''
    document.getElementById('listaGames').innerHTML = ''
    document.getElementById('listaLivros').innerHTML = ''

    listaMidias.forEach( (item, i) => {
        if (item.categoria == 'Filmes') 
            document.getElementById('listaFilmes').innerHTML += montarCardMidia(item, i)
                        
        if (item.categoria == 'Séries')
            document.getElementById('listaSeries').innerHTML += montarCardMidia(item, i)
            
        if (item.categoria == 'Games') 
            document.getElementById('listaGames').innerHTML += montarCardMidia(item, i)

        if (item.categoria == 'Livros') 
            document.getElementById('listaLivros').innerHTML += montarCardMidia(item, i)
                        
    } )
}

function montarCardMidia(item, i){
    return `<div class='div-img-filme'> 
                <img src="${item.link}" id='${i}' class="midia" onmouseenter="exibirIMG('${item.linkgif}','${i}')" onmouseleave="exibirIMG('${item.link}', '${i}')">
                <img src='img/remove.svg' class='excluir' onclick='excluirMidia(${i})'>
            </div>
            `
}

function excluirMidia(i){
    listaMidias.splice(i, 1)
    localStorage.setItem( 'bdMidiasStarGeek', JSON.stringify(listaMidias)) 
    exibirCatalogoFilmes()
    
}

function exibirIMG(img, id){
    if (img != '') 
        document.getElementById(id).src = img
}

exibirCatalogoFilmes()