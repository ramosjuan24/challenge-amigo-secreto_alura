// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto;
let listaAmigosSorteados = []; // Array para guardar los amigos
let amigosYaSorteados = []; // Array para guardar los amigos ya sorteados
let inputAmigo = document.getElementById("amigo");


function agregarAmigo(){

    //let amigo = document.getElementById('amigo').value;
    let amigo = document.getElementById('amigo').value.trim(); // Elimina espacios en blanco al inicio y al final
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para solo letras y espacios
    listaAmigosSorteados = document.getElementById('listaAmigos'); // Referencia al <ul>

    if (amigo === '') {
        alert('¡Debes ingresar un nombre de un amigo!')
        //asignarTextoElemento('ul', '¡Debes ingresar un nombre de un amigo!');
        //mostrarResultado('¡Debes ingresar un nombre de un amigo!');
    } else if (!regex.test(amigo)) {
        
        alert('❌ Solo se permiten letras y espacios.');
        //asignarTextoElemento('ul', '❌ Solo se permiten letras y espacios.');
    } else {

    // Verificar si el nombre ya está en la lista
    let amigosEnLista = Array.from(listaAmigosSorteados.getElementsByTagName('li'));
    let nombreYaExiste = amigosEnLista.some(li => li.textContent.trim().toLowerCase() === amigo.toLowerCase());

    if (nombreYaExiste) {
        //asignarTextoElemento('ul', '⚠️ Este amigo ya ha sido agregado.');
        alert('⚠️ Este amigo ya ha sido agregado.')
        return;
    }

    // Crear un nuevo elemento <li>
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = amigo; // Asigna el nombre del amigo al <li>

    // Agregarlo a la lista <ul>
    listaAmigosSorteados.appendChild(nuevoElemento);

    // Limpiar el input después de agregar el amigo
    document.getElementById('amigo').value = '';
    }
   
}

function sortearAmigo() {

    let lista = document.getElementById('listaAmigos');
    let listaAmigosSorteados = lista.getElementsByTagName('li'); // Obtener todos los <li>

    if (listaAmigosSorteados.length === 0) {
        //mostrarResultado('⚠️ No hay amigos en la lista para sortear.');
        //asignarTextoElemento('ul','⚠️ No hay amigos en la lista para sortear.')
        alert('⚠️ No hay amigos en la lista para sortear.')
        return;
    }else if(listaAmigosSorteados.length === 1){
        //mostrarResultado('⚠️ No hay amigos en la lista para sortear.');
        //asignarTextoElemento('ul','⚠️ Debes ingresar al menos (2) nombres de amigos')
        alert('⚠️ Debes ingresar al menos (2) nombres de amigos')
        return;
    }

    // Filtrar la lista para excluir a los amigos ya sorteados
    let amigosDisponibles = Array.from(listaAmigosSorteados).filter(li => !amigosYaSorteados.includes(li.textContent.trim()));

    if (amigosDisponibles.length === 0) {
        // Si ya no hay amigos disponibles para sortear
        //asignarTextoElemento('ul', '🎉 Todos los amigos ya han sido sorteados.');
        alert('🎉 Todos los amigos ya han sido sorteados.')
        return;
    }

    // Obtener un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigosSorteados.length);
    let amigoSorteado = listaAmigosSorteados[indiceAleatorio].textContent;

    // Mostrar el resultado dentro del <ul> resultado
    mostrarResultado(`🎉 ¡El amigo sorteado es: ${amigoSorteado}!`);

    // Limpiar la lista de amigos sorteados (todos los <li> dentro de #listaAmigos)
    limpiarListaAmigos();

}

function limpiarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    // Eliminar todos los <li> dentro de la lista de amigos
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild);
    }
    // También puedes agregar un mensaje o dejar la lista vacía si lo prefieres
    //asignarTextoElemento('ul', '¡La lista ha sido limpiada!');
}


// Nueva función para agregar un <li> dentro de la lista resultado
function mostrarResultado(texto) {
    let listaResultado = document.getElementById('resultado');

    if (listaResultado) {
        listaResultado.innerHTML = ''; // Limpiar resultado anterior
        let nuevoLi = document.createElement('li'); // Crear <li>
        nuevoLi.textContent = texto; // Asignar texto
        listaResultado.appendChild(nuevoLi); // Agregar a la lista
    } else {
        console.error(`⚠️ Error: No se encontró el elemento con id="resultado"`);
    }
}

function reiniciarJuego(){
    location.reload(); 
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

inputAmigo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      agregarAmigo();
    }
  });


