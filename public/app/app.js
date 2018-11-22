import {handleStatus, log} from './utils/promises-helpers.js';
import './utils/array-helpers.js';

document
.querySelector('#myButton')
.addEventListener('click', () => 
    fetch('/notas')
    .then(handleStatus)
    .then(log)
    .then(notas => 
        notas
        .$flatMap(nota => nota.itens)
        .filter(item => item.codigo == 2143)
        .reduce((total, item) => total + item.valor, 0)
    )
    .then(console.log)
    .catch(console.log)
);