import { log } from './utils/promises-helpers.js';
import './utils/array-helpers.js';
import { notaService as service } from './nota/service.js';

document
.querySelector('#myButton')
.addEventListener('click', () => 
    service
    .sumItems(2143)
    .then(console.log)
    .catch(console.log)
);