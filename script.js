/* =========================================
   CONFIGURACIÓN DE NÚCLEO (ESTILO HACKER)
   ========================================= */
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #050505; /* Negro profundo */
    color: #00ff41; /* Verde Matrix */
    font-family: 'Fira Code', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow-x: hidden;
    padding: 20px;
}

/* Efecto de líneas de escaneo en el fondo (Opcional pero pro) */
body::before {
    content: " ";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 4px, 3px 100%;
    pointer-events: none;
    z-index: 10;
}

/* Contenedor Principal */
.container {
    width: 100%;
    max-width: 900px;
    text-align: center;
    z-index: 5;
    background: rgba(0, 0, 0, 0.8);
    padding: 40px;
    border: 1px solid #00ff41;
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
}

/* Título con Efecto Glitch */
h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 10px;
    text-shadow: 2px 2px #000, 0 0 10px #00ff41;
}

p {
    color: #888;
    margin-bottom: 40px;
    font-size: 0.9rem;
}

/* =========================================
   CUADRÍCULA DE DESCARGAS (GRID)
   ========================================= */
.download-grid {
    display: grid;
    /* Crea columnas automáticas de mínimo 200px */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

/* Est
