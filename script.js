const texarea = document.querySelector(".tex-area");
const mensaje = document.querySelector(".mensaje");
const mensajeExito = document.querySelector(".output-section h2"); 
const muneco = document.querySelector(".output-section img");  

function btnEncriptar() {
    const textoOriginal = texarea.value;
    if (validarTexto(textoOriginal)) {
        const textoEncriptado = encriptar(textoOriginal);
        mensaje.value = textoEncriptado;
        texarea.value = "";
        mensaje.style.backgroundImage = "none";
        mostrarMensajeExito("Texto encriptado con éxito", "IMG/Exito.jpg"); 
    }
}

function btnDesencriptar() {
    const textoOriginal = texarea.value;
    if (validarTexto(textoOriginal)) {
        const textoDesencriptado = desencriptar(textoOriginal);
        mensaje.value = textoDesencriptado;
        texarea.value = "";
        mensaje.style.backgroundImage = "none";
        mostrarMensajeExito("Texto desencriptado con éxito", "IMG/Exito.jpg"); 
    }
}

function mostrarMensajeExito(mensajeTexto, imagenExito) {
    mensajeExito.textContent = mensajeTexto; 
    muneco.src = imagenExito;  
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    if (!regex.test(texto)) {
        alert("Error: Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return false;
    }
    return true;
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
