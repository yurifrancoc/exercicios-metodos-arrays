// let texto = " Esse texto é cabuloso top demais pqp meu irmao t l g "

// let textoEmArray = texto.trim().split(" ")
// let somaPalavras = 0;

// for (let i = 0; i < textoEmArray.length; i++) {

//     somaPalavras = i + 1
// }
// console.log(somaPalavras)
// let input = "cAPS"

// function processData(input) {
//     for (i = 0; i < input.length; i++) {
//         const primeiraLetra = input[0]
//         const palavra = input[i]
//         if (primeiraLetra === primeiraLetra.toLowerCase()) {
//             primeiraLetraMaiuscula = primeiraLetra.toUpperCase()
//         } console.log(primeiraLetraMaiuscula + palavra)
//     }

// }
//


// let jogadores = [
//     {
//         "nome": "Herman",
//         "jogada": 1
//     },
//     {
//         "nome": "Rhodes",
//         "jogada": 0
//     },
//     {
//         "nome": "Beach",
//         "jogada": 0
//     }
// ]

//Aquele que for o único(a) a jogar zero ou um é o sorteado
//se todos forem iguais = empate
//se 1 tiver diferente, é o vencedor

// function solucao(jogadores) {

//     for (let pessoa of jogadores) {
//         if (pessoa.jogada === 0) {
//             console.log(pessoa.nome)
//         }
//     }


// }
// solucao(jogadores)






// cada um dos jogadores "joga" um número X qualquer
// o capitão do time soma todos os números jogados e obtém o resultado S
// Depois, começa a contar de 1 até S apontando inicialmente para si mesmo
// (e falando alto e claramente "um"), depois para o jogador imediatamente a sua
// direita (e falando "dois") e assim por diante.

// let numeros = [3, 5, 7, 6, 5, 3]

// function solucao(numeros) {
//     let somadorResultadoS = 0
//     for (let i = 0; i < numeros.length; i++) {
//         const numero = numeros[i];
//         somadorResultadoS = somadorResultadoS + numero

//     }
// }

// solucao(numeros)


//inicialmente, 50 centavos por minuto de viagem e 
//mais 70 centavos por cada quilômtro de viagem realizado
//Caso a viagem tenha mais de 10km, cada km adicional (acima de 10) fica mais barato, 
//passando a custar apenas 50 centavos por km.
//Caso a viagem dure mais de 20min, cada min adicional (acima de 20) fica mais barato, 
//passando a custar apenas 30 cetavos por minuto.
//Lembre-se de arredondar para baixo o valor final a ser pago


//50 centavos por minuto de viagem e mais 70 centavos por cada quilômtro de viagem realizado
//mais de 10km, cada km adicional 
//(acima de 10) fica mais barato, passando a custar apenas 50 centavos por km
//Caso a viagem dure mais de 20min, cada min adicional 
//(acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto

// [
//     '5',     '3.56',
//     '17',    '-5.1',
//     '36.3',  '0.0002',
//     '-2',    '5',
//     '5',     '-9.01',
//     '-17.7'
//   ]




let inputArray1 = ['0', '0']
let inputArray2 = ['0', '3']
let inputArray3 = ['4', '0']

// "3 
// 0 0 
// 0 3 
// 4 0"

function processData(inputArray) {
    console.log(inputArray3[0] - inputArray1[0])
    let distancia = inputArray[1]
}

processData(inputArray1)





















// let input = "3 0 0 0 3 4 0"

// // "3
// // 0 0
// // 0 3
// // 4 0"

// function processData(input) {
//     let inputArray = input.split(" ")
//     let numeroDeFunc = inputArray[0]
//     let arrayDeX = []
//     let arrayDeY = []
//     for (let i = 1; i < inputArray.length; i++) {
//         const elementX = inputArray[i];
//         if (i % 2 === 0) {
//             arrayDeX.push(elementX)
//         }
//         else {
//             arrayDeY.push(elementX)
//         }
//     }

//     console.log(Math.hypot((arrayDeX[0] && arrayDeX[1]), (arrayDeY[1] && arrayDeY[2])))


// }

// processData(input)
















// let min = 25
// let km = 11.5

// function solucao(min, km) {
//     let somaTotalAntesDez = 0
//     let somaTotalAntesVinte = 0
//     let somaTotalMin = 0
//     let somaTotalKm = 0
//     if (km <= 10) {
//         somaTotalAntesDez = km * 70
//     }
//     else if (km > 10) {
//         let diferenca = (km - 10) * 50
//         let valorTotal = 10 * 70
//         somaTotalKm = diferenca + valorTotal
//     }
//     if (min <= 20) {
//         somaTotalAntesVinte = min * 50
//     }
//     else if (min > 20) {
//         let diferenca = (min - 20) * 30
//         let valorTotal = 20 * 50
//         somaTotalMin = diferenca + valorTotal
//     }
//     console.log(somaTotalKm + somaTotalMin + somaTotalAntesDez + somaTotalAntesVinte)
// }

// solucao(min, km)





//50 centavos por minuto de viagem e mais 70 centavos por cada quilômtro de viagem realizado
//mais de 10km, cada km adicional
//(acima de 10) fica mais barato, passando a custar apenas 50 centavos por km
//Caso a viagem dure mais de 20min, cada min adicional
//(acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto












// input = ["cubos", "cuggbyos"]


// function processData(input) {
//     inputString = input.toString()
//     let senha = input[0]
//     let criptografia = input[1]
//     for (let confereLetra of inputString) {
//         console.log(confereLetra[senha])
//     }
// }



// processData(input)












































































// jogadores = [
//     {
//         "nome": "Herman",
//         "jogada": 0
//     },
//     {
//         "nome": "Rhodes",
//         "jogada": 0
//     },
//     {
//         "nome": "Beach",
//         "jogada": 0
//     },
//     {
//         "nome": "Laurel",
//         "jogada": 0
//     },
//     {
//         "nome": "Beatrice",
//         "jogada": 1
//     },
//     {
//         "nome": "Alison",
//         "jogada": 0
//     }
// ]

// function solucao(jogadores) {
//     let jogadaZero = []
//     let jogadaUm = []
//     for (let pessoa of jogadores) {
//         if (pessoa.jogada === 0) {
//             jogadaZero.push(pessoa.nome)
//         }
//         else if (pessoa.jogada === 1) {
//             jogadaUm.push(pessoa.nome)
//         }
//     }
//     if (jogadaUm.length === 1) {
//         jogadaUmString = jogadaUm.toString()
//         console.log(jogadaUmString)
//     }
//     else if (jogadaZero.length === 1) {
//         jogadaZeroString = jogadaZero.toString()
//         console.log(jogadaZeroString)
//     }
//     else if (jogadaUm.length !== 0 && jogadaZero.length !== 0) {
//         console.log("NINGUEM")
//     }
// }


// solucao(jogadores)

































// function solucao(numeros) {
//     let somadorResultadoS = 0
//     let soma = 0
//     for (i = 0; i < numeros.length; i++) {
//         const numero = numeros[i]
//         somadorResultadoS = somadorResultadoS + numero
//     }
//     for (let index = 0; index < somadorResultadoS; index++) {
//         if (numeros.length <= soma) {
//             soma = 0
//         }
//         soma++
//     }
//     console.log(soma)
// }




// solucao(numeros)


































// function solucao(min, km) {
//     let somaPrecoTempoDistancia = 0

//     if (min < 1 && km < 1) {
//         tempoPreco = 50
//         distanciaPreco = 70
//         somaPrecoTempoDistancia = tempoPreco + distanciaPreco
//     } else if (min > 20) {
//         tempoPreco = 30
//         somaPrecoTempoDistancia = tempoPreco
//     } else if (km > 10) {
//         distanciaPreco = 50
//         somaPrecoTempoDistancia = distanciaPreco
//     }


//     console.log(somaPrecoTempoDistancia)


// }

// solucao(25, 11.50)





































//function solucao(min, km) {
//     let precoDistancia = 0;
//     let precoTempo = 0;
//     precoTempo = min >= 20 ? 30 * (min - 20) + 50 * 20 : 50 * min
//     precoDistancia = km >= 10 ? 50 * (km - 10) + 70 * 10 : 70 * km
//     const precoTotal = precoDistancia + precoTempo

//     console.log(Math.floor(precoTotal))
// }

// solucao(0, 70)







































// input = "tESTE"
































































// function processData(input) {
//     if (input === input.toUpperCase()) {
//         console.log(input.toLowerCase())
//     } else if (input[0] === input[0].toLowerCase()) {
//         console.log(input[0].toUpperCase() + input.slice(1).toLowerCase())
//     } else if (input = input.toLowerCase() && input.slice(1).toLowerCase()) {
//         console.log(input.toLowerCase())
//     }
// }

// processData(input)

















// const lista = [12, 18, 19]


// function solucao(lista) {
//     let idadeMenorEntreMaiores = 100000000
//     let encontrouMenor = false
//     for (let idade of lista) {
//         if (idade >= 18) {
//             if (idade <= idadeMenorEntreMaiores) {
//                 idadeMenorEntreMaiores = idade
//                 encontrouMenor = true
//             }
//             console.log(idadeMenorEntreMaiores)
//         } else if (encontrouMenor = false) {
//             console.log("CRESCA E APARECA.")
//             break
//         }
//     }

// }

// solucao(lista)
































// const pacientes = ["Jose", 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

// function consultorio(pacientes, operacao) {
//     for (let paciente of pacientes) {
//         if (operacao === "agendar") {
//             operacao = pacientes.push(paciente)
//             operacao = pacientes.shift(paciente)
//             console.log(pacientes)
//         } if (operacao === "atender") {
//             operacao = pacientes.shift()

//             console.log(pacientes)
//         }
//     }

// }

// consultorio(pacientes, "agendar")
// consultorio(pacientes, "agendar")
// consultorio(pacientes, "atender")
// consultorio(pacientes, "agendar")