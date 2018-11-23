import { log } from './utils/promises-helpers.js';
import './utils/array-helpers.js';
import { notaService as service } from './nota/service.js';
import { takeUtil, debounce, pipe, partialize } from './utils/operators.js';

const operation = pipe(
    partialize(takeUtil, 3),
    partialize(debounce, 500)
);

const action = operation(() =>
    service
    .sumItems(2143)
    .then(console.log)
    .catch(console.log)
);

document
.querySelector('#myButton')
.addEventListener('click', action);