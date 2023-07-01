const personas = [
    new Persona("Ricardo", "Goicochea")
];

function mostrarLista(){
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("lista").innerHTML = texto;
}

function agregarPersona(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    const persona = new Persona(nombre.value, apellido.value);
    personas.push(persona);
    mostrarLista();
}