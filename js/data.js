document.addEventListener("DOMContentLoaded", () => {
    // Recuperar el dato del localStorage
    const dato = localStorage.getItem('data');

    // Mostrar el dato en la página
    document.getElementById('data').innerText = dato ? dato : 'No hay datos disponibles';
});