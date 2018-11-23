import { log } from './utils/promises-helpers.js';
import './utils/array-helpers.js';
import { notaService as service } from './nota/service.js';
import { takeUtil, debounce } from './utils/operators.js';

const action = debounce(500,
    takeUtil(3, () => 
        service
        .sumItems(2143)
        .then(console.log)
        .catch(console.log)
    )
);

document
.querySelector('#myButton')
.addEventListener('click', action);