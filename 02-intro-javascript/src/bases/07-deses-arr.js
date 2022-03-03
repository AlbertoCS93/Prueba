
const personajes = ['Alberto', 'Cisneros', 'Solis'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , , p3 ] = personajes;

console.log(p3);

const retornaArreglo = () =>{
    return ['ABC',123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre 
const prueba = ( valor ) => {
    return [valor, ()=>{ console.log('Hola mundo')}];
}
const [nombre, setNombre] = prueba( 'Jose' );

console.log(nombre);
setNombre();