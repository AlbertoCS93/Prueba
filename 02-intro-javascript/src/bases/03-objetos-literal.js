const persona = {
    nombre: 'Alberto',
    apellido: 'Solis',
    edad: 28,
    direccion:{
        ciudad : 'Tapachula',
        zip : 5535698,
        lat : 14.2365,
        lng : 34.659898,
    }
};

// console.table( {persona} );

// const persona2 = persona;
const persona2 = {...persona};
persona2.nombre = "Jose";

console.log( persona );
console.log(persona2)