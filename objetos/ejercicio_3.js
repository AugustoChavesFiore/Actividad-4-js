function esMayoEdad(per){
    if (per.edad>=18){
        return true;
    }
    else{
        return false;
    }
}
console.log(esMayoEdad(persona));//devuelve true edad=27
persona.edad=15;
console.log(esMayoEdad(persona));//devuelve false edad=15

