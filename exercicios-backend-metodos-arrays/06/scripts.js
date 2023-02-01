const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "pedro", "flavin"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "bolota"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function nomeDoPet(pety) {
    for (let objeto of usuarios) {
        for (let pet of objeto.pets) {
            if (pet === pety) {
                console.log(`O dono de ${pety} é ${objeto.nome}`)
            }
        }
    }
}
nomeDoPet("Farofa")









// function nomeDoDono(pet) {
//     for (let objeto of usuarios) {
//         for (let pet of objeto.pets) {
//             if (objeto.pets.indexOf(pet) === 1) {
//                 console.log(objeto.nome)
//             }
//         }
//     }
// }







// for (let usuario of usuarios) {
//     for (let pet of usuario.pets) {
//         if (usuario === pet) {
//             console.log(usuario.nome)
//         }
//     }
// }