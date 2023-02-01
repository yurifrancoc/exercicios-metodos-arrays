const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

const imprimeCarros = (arrayComCarros, indice) => {
    for (let index = 0; index < arrayComCarros.length; index++) {
        const carro = arrayComCarros[index];
        console.log(carro)
    }
}

imprimeCarros(nomes, posicao)






















// function separaGrupos(nomes, tamanhoDoGrupo) {
//     let grupos = []
//     for (let index = 0; index < nomes.length; index = tamanhoDoGrupo + index) {
//         grupos.push(nomes.slice(index, index + tamanhoDoGrupo))

//     }
//     return grupos
// }















// function divideGrupo(nomes, tamanhoDoGrupo) {
//     let grupo1 = "grupo 1 = "
//     let grupo2 = "grupo 2 = "
//     for (let index = 0; index < tamanhoDoGrupo; index++) {
//         const item = nomes[index];
//         grupo1 = grupo1 + item + " "
//     }
//     for (let index = tamanhoDoGrupo; index < tamanhoDoGrupo.length; index++) {
//         const item = nomes[index];
//         grupo2 = grupo2 + item + " "
//     }
//     console.log(grupo2)


// }

// divideGrupo(nomes, tamanhoDoGrupo)

