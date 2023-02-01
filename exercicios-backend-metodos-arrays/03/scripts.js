const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevette', 'Brasilia', "gol"];
const posicao = 4;


function gruposDeCarros(nomes, posicao) {

    listaDeInteresse = nomes.slice(posicao, posicao + 3)
    listaDeInteresse = listaDeInteresse.join(" - ")
    return listaDeInteresse
}


console.log(gruposDeCarros(nomes, posicao))















// function gruposDeCarros(nomes, posicao) {
//     let carrosDeInteresse = []
//     for (let index = posicao; index < nomes.length; index = posicao + index) {
//         carrosDeInteresse.push(nomes.slice(index, index + 3))
//         break

//     }
//     return carrosDeInteresse

// }
















// let carrosEscolhidos = []
// for (let index = posicao; index < nomes.length; index = posicao + index) {
//    carrosEscolhidos.push(nomes.slice())
//    break

// }
// return carrosEscolhidos









// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //descarta os primeiros 10% dos dados
// //descarta os ultimos 10% dos dados



// function aproveitaMeio(numeros) {
//     let startIndex = numeros.length * 10 / 100
//     let endIndex = numeros.length * 90 / 100
//     let fatia = numeros.slice(startIndex, endIndex)
//     console.log(fatia)
// }

// aproveitaMeio(numeros)