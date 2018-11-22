import {handleStatus} from '../utils/promises-helpers.js';

const API = '/notas';

const sumItems = code => notas => 
notas
.$flatMap(nota => nota.itens)
.filter(item => item.codigo == code)
.reduce((total, item) => total + item.valor, 0);

export const notaService = {

    listAll()
    {
        return fetch(API).then(handleStatus);
    },

    sumItems(code)
    {
        return this.listAll().then(sumItems(code));
    }
};