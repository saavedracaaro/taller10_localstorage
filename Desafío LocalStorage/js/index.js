document.addEventListener("DOMContentLoaded", () => {
    const botonGuardar = document.getElementById('buttonText');
    const inputTexto = document.getElementById('inputText'); 
    
    botonGuardar.onclick = function() {
        const data = inputTexto.value; 

        // Guardar el dato en localStorage
        localStorage.setItem('data', data); 

        // Redirigir a data.html
        window.location.href = 'data.html';
    };
});