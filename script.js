let array_nome = []
let array_curso = []
let array_genero = []
let array_convidados = []

function mais() {
    var valor = document.getElementById('input_convidado').value

    if (valor < 5) {
        document.getElementById('input_convidado').value = parseInt(valor) + 1
    } else {
        alert("Valor máximo atingido")
    }

}

function menos() {
    var valor = document.getElementById('input_convidado').value

    if (valor > 0) {
        document.getElementById('input_convidado').value = valor - 1
    } else {
        alert("Valor mínimo atingido")
    }
}

function adicionar() {
    var nome = document.getElementById('input_nome').value
    var curso = document.getElementById('cursos_select').value
    var genero = getGenero(document.getElementsByName('genero'))
    var convidados = document.getElementById('input_convidado').value

    array_nome.push(nome)
    array_curso.push(curso)
    array_genero.push(genero)
    array_convidados.push(convidados)

    localStorage.setItem("nome", JSON.stringify(array_nome))
    localStorage.setItem("curso", JSON.stringify(array_curso))
    localStorage.setItem("genero", JSON.stringify(array_genero))
    localStorage.setItem("convidados", JSON.stringify(array_convidados))

    document.querySelector(
        "input[type=radio][name=genero]:checked"
    ).checked = false;
    document.getElementById('input_nome').value = ""
    document.getElementById('input_convidado').value = 0
    document.getElementById('cursos_select').value = "ADS"


}

function getGenero(genero) {
    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            return genero[i].value
        }
    }
}

function exibir() {
    var listaNome = JSON.parse(localStorage.getItem('nome'))
    var listaCurso = JSON.parse(localStorage.getItem('curso'))
    var listaGenero = JSON.parse(localStorage.getItem('genero'))
    var listaConvidado = JSON.parse(localStorage.getItem('convidados'))

    var listaUl = document.createElement('ul')
    listaUl.id = "lista"
    for (let i = 0; i < listaNome.length; i++) {
        const li = document.createElement('li')
        const itemText = document.createTextNode("Nome: "+listaNome[i]+" Curso: "+listaCurso[i]+" Genero: "+listaGenero[i]+" Convidados: "+listaConvidado[i])

        li.appendChild(itemText)
        listaUl.appendChild(li)
    }

    var resultado = document.getElementById("resultado")
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
    resultado.appendChild(listaUl)

}

function limpar(){
    localStorage.clear()
}

