const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];


frutasString = frutas.reverse()
frutasString = frutas.join(", ")
frutasString = frutas.slice(1, 4)
frutasString.push("Melão")

console.log(frutasString)























// function inverte(texto) {
//     let arrayDeLetras = texto.split("")
//     arrayDeLetras.reverse()
//     let textoString = ""
//     for (let letra of arrayDeLetras) {
//         textoString = textoString + letra
//     }
//     console.log(textoString)
// }

// inverte("Cubos Academy")