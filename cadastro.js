function abrirCadastro() {
    var formulario = document.getElementById('formcadastro')
    var botao = document.getElementById('abrircadastro')

   formulario.classList.toggle('active')
   
   botao.style.display = 'none'
    

}


function registrar() {

    var formulario = document.getElementById('formcadastro')
    var formulario2 = document.getElementById('formcadastro2')
    var botao = document.getElementById('abrircadastro')
    var nome1 = document.getElementById('nome')
    var nasc1 = document.getElementById('nascimento')
    var sexo1 = document.getElementsByName('sexo')
    var funcao1 = document.getElementById('funcao')
    

    var nome = String(nome1.value)
    var nasc = (nasc1.value)
    var sexo = ''
    var funcao = String(funcao1.value)

    if (sexo1[0].checked) {
        sexo = 'Masculino'
    } else if (sexo1[1].checked) {
        sexo = 'Feminino'
    }

    localStorage.setItem ('nome', nome)
    localStorage.setItem ('nascimento', nasc)
    localStorage.setItem ('sexo', sexo)
    localStorage.setItem ('função', funcao)
    
    alert('Funcionário cadastrado')

    formulario.style.display = 'none'
    formulario2.style.visibility = 'visible'
    formulario2.style.height = '200px'
}


function buscar() {
    var resultadonome = document.getElementById('resultadonome')
    var resultadonasc = document.getElementById('resultadonasc')
    var resultadosexo = document.getElementById('resultadosexo')
    var resultadofuncao = document.getElementById('resultadofuncao')
    var nomefuncionario = document.getElementById('buscarfuncionario')
    var nomefunc = String(nomefuncionario.value)
    var nomeguardado = localStorage.getItem('nome')
    var nascguardado = localStorage.getItem('nascimento')
    var datanasc = nascguardado.split('-').reverse().join('/')
    var sexoguardado = localStorage.getItem('sexo')
    var funcaoguardada = localStorage.getItem('função')

    
     
    
    if (nomefunc == nomeguardado ) {
        resultadonome.value = nomeguardado
        resultadonasc.value = datanasc
        resultadosexo.value = sexoguardado
        resultadofuncao.value = funcaoguardada

    } else {
        alert('Esse funcionário não trabalha conosco')
    }

 

}