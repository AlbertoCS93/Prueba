//funciones en JS

const saludar = function ( nombre ){
    return `Hola, ${nombre}`;
};
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}
const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

// saludar = 20;
// console.log( saludar("Alberto") );
console.log( saludar2('Jose') );
console.log( saludar3('Alberto') );
console.log( saludar4() );

// const getUser = () => {
//     return {
//         uid: "123",
//         userName: "Name"
//     }
// }

const getUser = () => (
    {
        uid: "123",
        userName: "Name"
    }
)


// function getUsuarioActivo( nombre ){
//     return {
//         uid: "234",
//         userName: nombre
//     }
// }

const getUsuarioActivo = (nombre) => ({
    uid: "234",
    userName: nombre
})

console.log( getUsuarioActivo('Alberto') );