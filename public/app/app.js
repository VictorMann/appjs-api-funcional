import { log, timeoutPromise, retry } from './utils/promises-helpers.js';
import './utils/array-helpers.js';
import { notaService as service } from './nota/service.js';
import { takeUtil, debounce, pipe, partialize } from './utils/operators.js';
import { EventEmitter } from './utils/event-emitter.js';

const operation = pipe(
    partialize(takeUtil, 3),
    partialize(debounce, 500)
);

const action = operation(() =>
    retry(3, 3000, () => timeoutPromise(200, service.sumItems(2143)) )
    .then(total => EventEmitter.emit('itensTotalizados', total))
    .catch(console.log)
);

document
.querySelector('#myButton')
.addEventListener('click', action);