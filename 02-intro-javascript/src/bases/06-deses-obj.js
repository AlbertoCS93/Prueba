// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Alberto',
    edad: 28,
    clave: 'clave',
    rango: 'soldado',
};

const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const rangos = 'capitan';
// const retornaPersona = ( {nombre, edad, rango = rangos} ) => {
//     // const {edad, nombre, clave} = usuario;
//     // console.log(edad, nombre, clave);
//     console.log(edad, nombre, rango);
// }

const retornaPersona = ( {clave, nombre, edad, rango = 'capotan'} ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.2626,
            lng: -12.3362
        }

    }
}

const {nombreClave, anios, latlng:{lat,lng}} = retornaPersona( persona );
console.log(nombreClave, anios, lat, lng);