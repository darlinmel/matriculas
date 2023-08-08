// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ['matricula_educacion_inicial_alumnos_de_0_a_36_meses',
'pencion_educacion_inicial_alumnos_de_0_a_36_meses',
'matriculas_educacion_inicial',
'pencion_eduacacion_inicial','matricula_educacion_basica','pencion_educacion_basica','matricula_educacion_basica_superior','pencion_educacion_superior','matricula_bachillerato','pencion_bachillerato']
// Podemos tener varios conjuntos de datos
const datosVentas2020 = {
    label: "PARTICULARES",
    data: [1070.44,
        1222.64,
        3431.07,
        5,685,
        4665.79,7385.61,
        4649.49,7243.22,
        3770.48,5868.52], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor:[
        'rgba(255, 26, 104, 0.5)',

        'rgba(54, 162, 235, 0.5)',

        'rgba(255, 206, 86, 0.5)',

        'rgba(75, 192, 192, 0.5)',

        'rgba(153, 102, 255, 0.5)',

        'rgba(255, 159, 64, 0.5)',

        'rgba(155, 26, 104, 0.5)',

        'rgba(54, 162, 235, 0.5)',
        
        'rgba(255, 26, 104, 0.5)',

        'rgba(0, 0, 0, 0.5)'
          
        ],
       // Color de fondo
    borderColor: [
        'rgba(255, 26, 104, 1)',

        'rgba(54, 162, 235, 1)',

        'rgba(255, 206, 86, 1)',

        'rgba(75, 192, 192, 1)',

        'rgba(153, 102, 255, 1)',

        'rgba(255, 159, 64, 1)',

        'rgba(155, 26, 104, 1)',

        'rgba(54, 162, 235, 1)',

        'rgba(255, 26, 104, 1)',

        'rgba(0, 0, 0, 1)'

        ],
        // Color del borde
    borderWidth: 1,// Ancho del borde
};
const datosVentas2021 = {
    label: "FISCOMISIONALES",
    data:  [53693.42,
        79207.75,
        107689.45,
        168066.39,
        81158.38,125240.35,
        71026.23,107678.91,
        63174.49,95686.18], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor:[
            'rgba(255, 26, 104, 0.5)',
    
            'rgba(54, 162, 235, 0.5)',
    
            'rgba(255, 206, 86, 0.5)',
    
            'rgba(75, 192, 192, 0.5)',
    
            'rgba(153, 102, 255, 0.5)',
    
            'rgba(255, 159, 64, 0.5)',
    
            'rgba(155, 26, 104, 0.5)',
    
            'rgba(54, 162, 235, 0.5)',
            
            'rgba(255, 26, 104, 0.5)',
    
            'rgba(0, 0, 0, 0.5)'
              
            ],
           // Color de fondo
        borderColor: [
            'rgba(255, 26, 104, 1)',
    
            'rgba(54, 162, 235, 1)',
    
            'rgba(255, 206, 86, 1)',
    
            'rgba(75, 192, 192, 1)',
    
            'rgba(153, 102, 255, 1)',
    
            'rgba(255, 159, 64, 1)',
    
            'rgba(155, 26, 104, 1)',
    
            'rgba(54, 162, 235, 1)',
    
            'rgba(255, 26, 104, 1)',
    
            'rgba(0, 0, 0, 1)'
    
            ],
    borderWidth: 1,// Ancho del borde
};

new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020,
            datosVentas2021,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});