import {handleStatus} from './utils/promises-helpers.js';

document
.querySelector('#myButton')
.addEventListener('click', () => 
    fetch('/notas')
    .then(handleStatus)
    .then(console.log)
    .catch(console.log)
);