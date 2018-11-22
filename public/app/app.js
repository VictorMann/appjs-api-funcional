import {handleStatus, log} from './utils/promises-helpers.js';

document
.querySelector('#myButton')
.addEventListener('click', () => 
    fetch('/notas')
    .then(handleStatus)
    .then(log)
    .then(notas => notas.reduce((arr, nota) => arr.concat(nota.itens), []))
    .then(log)
    .then(itens => itens.filter(item => item.codigo == 2143))
    .then(log)
    .then(itens => itens.reduce((total, item) => total + item.valor, 0))
    .then(console.log)
    .catch(console.log)
);