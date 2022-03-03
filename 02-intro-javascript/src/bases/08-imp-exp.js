// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes'

// import { heroes } from './data/heroes';
// import heroes, {owners} from './data/heroes'; // exportacion por defecto
import {heroes, owners} from '../data/heroes'; // exportacion por defecto
// console.log(heroes);
// console.log(owners);
// const getHeroeById = (id) => {
//     return heroes.find(heroe => heroe.id === id)
//     // return heroes.find((heroe) => {
//     //     if(heroe.id === id) {
//     //         return true;
//     //     }else{
//     //         return false;
//     //     }
//     // })
// }

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

// console.log( getHeroeById(2) );

export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

// console.log( getHeroeByOwner('DC') );

export {
    getHeroeById
}