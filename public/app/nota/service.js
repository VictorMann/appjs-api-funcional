import { handleStatus } from '../utils/promises-helpers.js';
import { partialize, compose } from '../utils/operators.js';

const API = '/notas';

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo == code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

export const notaService = {

  listAll()
  {
    return fetch(API)
      .then(handleStatus)
      .catch(err => {
        console.log(err);
        Promise.reject('Nao foi possivel obter as notas');
      });
  },

  sumItems(code)
  {
    const filterItems = partialize(filterItemsByCode, code);
    const sumItems = compose(sumItemsValue, filterItems, getItemsFromNotas);
    
    return this.listAll().then(sumItems);
  }
};