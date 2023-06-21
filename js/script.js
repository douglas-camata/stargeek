var listaUsuarios = []
listaUsuarios = JSON.parse(localStorage.getItem('bdUsuariosStarGeek'))
if (listaUsuarios == null){
    listaUsuarios = []
}

function validarCadastro(nomeUsuario, usuario, senha, confSenha){
    if (nomeUsuario == '' || usuario == '' || senha == '' || confSenha == '') {
        alert ('Verifique os dados cadastrados. Não pode ter campos vazio.')
        return false
    }

    if (senha != confSenha) {
        alert('As suas senhas não conferem.')
        return false
    }

    return true
}

function botaoCadastro() {
    var nomeUsuario = document.getElementById("nome").value
    var usuario = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var confSenha = document.getElementById("confSenha").value
    
    var possoCadastrar = validarCadastro(nomeUsuario, usuario, senha, confSenha)
    if (possoCadastrar == false) {
        return false
    }
    
    var objUsuario = {
        nome: nomeUsuario,
        login: usuario,
        senha: senha 
    }
    listaUsuarios.push(objUsuario)
    localStorage.setItem( 'bdUsuariosStarGeek', JSON.stringify(listaUsuarios)) 

    alert ('Usuário cadastro com sucesso')
    window.location.href = 'login.html'

}

function botaoCadastrese (){
    location.href = 'cadusuario.html'
}

function botaoLogin(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

    var encontrou = false
    listaUsuarios.forEach ( item => {
        if (usuario == item.login && senha == item.senha) {
            alert (`Bem vindo ao sistema, ${item.nome}`)
            location.href = "catalogo.html"
            encontrou = true
        }
    } )

    if (encontrou == false) {
        alert('Usuário não encontrado')
    }   

}