document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log("Descargando: " + this.innerText);
        
        // Efecto visual simple al hacer clic
        const originalText = this.innerText;
        this.innerText = "EXTRAYENDO...";
        
        setTimeout(() => {
            this.innerText = originalText;
        }, 2000);
    });
});
