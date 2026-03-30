document.getElementById('btnDescarga').addEventListener('click', function() {
    console.log("Iniciando protocolo de descarga...");
    // Podrías agregar una alerta o cambiar el texto temporalmente
    const btn = this;
    const originalText = btn.innerText;
    
    btn.innerText = "DESCARGANDO...";
    
    setTimeout(() => {
        btn.innerText = originalText;
    }, 3000);
});