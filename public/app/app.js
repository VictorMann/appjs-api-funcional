import { log } from './utils/promises-helpers.js';
import './utils/array-helpers.js';
import { notaService as service } from './nota/service.js';
import { takeUtil } from './utils/operators.js';

const operation = takeUtil(3, () => 
    service
    .sumItems(2143)
    .then(console.log)
    .catch(console.log)
);

document
.querySelector('#myButton')
.addEventListener('click', operation);