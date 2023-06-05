const persona={
    nombre:"Fulano",
    edad:"27",
    profesion:"Estudiante"
}

function presentarPersona(per){
    return`Hola ${per.nombre}, tienes ${per.edad} y eres ${per.profesion}`
}
console.log(presentarPersona(persona))