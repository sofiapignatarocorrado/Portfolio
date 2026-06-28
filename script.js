function copiar(text) {
    navigator.clipboard.writeText(text);

    const msg = document.getElementById("copy-msg");
    msg.innerText = "Texto copiado al portapapeles ✔";

  setTimeout(() => {
    msg.innerText = "";
  }, 2000);
}