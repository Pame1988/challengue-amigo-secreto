let amigosUsuario = [];



document.getElementById("amigo").addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        agregarAmigo();
    }
})

function agregarAmigo() { // esta funcion inserta los amigos en la lista
let nombreAmigo = document.getElementById("amigo").value;
console.log(nombreAmigo);

if (nombreAmigo == "") {
    alert("Por favor, inserte un nombre");
} else {
    amigosUsuario.push(nombreAmigo);
    mostrarLista();
    blanquearCaja();
}
return;
}

function mostrarLista(){ // muestra la lista de los nombres
    let lista = document.getElementById("listaAmigos"); // Tomo el elemento lu 
    lista.innerHTML = ""; // Limpia la lista antes de agregar elementos
    for (let i = 0; i < amigosUsuario.length; i++) {
        let li = document.createElement("li"); // Crea el elemento li en HTML
        li.textContent = amigosUsuario[i]; // Pone el texto del usuario
        lista.appendChild(li); // Lo agrega a la lista
    };
    return;
}

function blanquearCaja () {
    let borrarNombre = document.getElementById("amigo");
    borrarNombre.value = "";
    return;
}

function sortearAmigo () { 
    let amigoSecreto = document.querySelector("button"); // hace funcionar el boton 
    if (amigosUsuario.length === 0) {
        alert("Error, no ingresaste ningun nombre")}
        else{
            let indiceAleatorio = Math.floor(Math.random()*amigosUsuario.length); // genera el indice aleatorio para el sorteo
            indiceAleatorio = amigosUsuario[indiceAleatorio]
            console.log(sortearAmigo)
        let resultadoFinal = document.getElementById("resultado"); // Muestra el nombre del amigo secreto
        resultadoFinal.innerHTML = indiceAleatorio;
        }
}


