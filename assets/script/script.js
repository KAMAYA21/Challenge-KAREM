function encriptar() {
  let texto = document.getElementById("texto").value.toLowerCase();
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.getElementById("mensaje-encriptado").value = textoCifrado;
}

function desencriptar() {
  let texto = document.getElementById("texto").value.toLowerCase();
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.getElementById("mensaje-encriptado").value = textoCifrado;
}
