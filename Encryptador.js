function obtenerTextoIngreso() {
    var textarea = document.getElementById("mensajeIngreso");
    var texto = textarea.value;
    console.log("Texto Ingresado: " + texto);
    desplazamiento = 3;
    document.getElementById("mensajeEncriptado").value = encriptarTexto(texto,desplazamiento);
    console.log("Texto Encriptado :" + encriptarTexto(texto,desplazamiento));
  }

function obtenerTextoEncriptado() {
    var textarea = document.getElementById("mensajeEncriptado");
    var texto = textarea.value;
    console.log("Texto Encriptado: " + texto);
    desplazamiento = 3;
    document.getElementById("mensajeDesencriptado").value = desencriptarTexto(texto,desplazamiento);
    console.log("Texto Desencriptado :" + desencriptarTexto(texto,desplazamiento));
}


function encriptarTexto(texto) {
      var textoencriptado = texto.toLowerCase();
      textoencriptado = textoencriptado.replace(/e/g, "enter");
      textoencriptado = textoencriptado.replace(/i/g, "imes");
      textoencriptado = textoencriptado.replace(/a/g, "ai");
      textoencriptado = textoencriptado.replace(/o/g, "ober");
      textoencriptado = textoencriptado.replace(/u/g, "ufat");
      return textoencriptado;
  }


  function desencriptarTexto(textoEncriptado) {
      var textodesencriptado = textoEncriptado;
      textodesencriptado = textodesencriptado.replace(/enter/g, "e");
      textodesencriptado = textodesencriptado.replace(/imes/g, "i");
      textodesencriptado = textodesencriptado.replace(/ai/g, "a");
      textodesencriptado = textodesencriptado.replace(/ober/g, "o");
      textodesencriptado = textodesencriptado.replace(/ufat/g, "u");
      return textodesencriptado;
  }