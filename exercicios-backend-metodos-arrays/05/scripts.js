const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function agendarPaciente(pacientes, paciente) {

    pacientes.push(paciente)
    pacientes.shift(paciente)
    let final = pacientes.join(", ")
    return final

}
function atenderPaciente(pacientes, paciente) {

    pacientes.shift(paciente)
    let final = pacientes.join(", ")
    return final


}

function cancelarPaciente(pacientes, paciente) {

    pacientes.shift(paciente)
    let final = pacientes.join(", ")
    return final


}

cancelarPaciente(pacientes, "José")
atenderPaciente(pacientes, "Pedro")
agendarPaciente(pacientes, "Maria")
agendarPaciente(pacientes, "Ana")
atenderPaciente(pacientes, "Bárbara")
console.log(agendarPaciente(pacientes))