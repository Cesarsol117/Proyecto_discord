// Obtener el contexto del canvas
var ctx = document.getElementById('miGrafica').getContext('2d');

// Configurar los datos
var datos = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [{
        label: 'Ventas Mensuales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Configurar opciones
var opciones = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Crear la instancia de la gráfica
var miGrafica = new Chart(ctx, {
    type: 'bar',
    data: datos,
    options: opciones
});

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('grafica');
    const ctx = canvas.getContext('2d');

    const datos = [10, 20, 10, 40, 50, 60]; // Valores de la gráfica
    const pasoX = canvas.width / (datos.length - 1);
    const escalaY = canvas.height / Math.max(...datos);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height - (datos[0] * escalaY));

    for (let i = 1; i < datos.length; i++) {
        ctx.lineTo(i * pasoX, canvas.height - (datos[i] * escalaY));
    }

    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 2;
    ctx.stroke();
});