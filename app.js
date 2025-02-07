let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombre);
    document.getElementById('amigo').value = '';
    actualizarLista();
}


function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Recorrer el array amigos y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos un nombre.");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado en la lista de resultados
    document.getElementById("resultado").innerHTML = amigoSorteado;
}



