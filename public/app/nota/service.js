import { handleStatus, log } from '../utils/promises-helpers.js';
import { partialize, pipe } from '../utils/operators.js';
import { Maybe } from '../utils/Maybe.js';

const API = '/notas';

const getItemsFromNotas = notasM => notasM.map(notas => notas.$flatMap(nota => nota.itens));
const filterItemsByCode = (code, itemsM) => itemsM.map(items => items.filter(item => item.codigo == code));
const sumItemsValue = itemsM => itemsM.map(items => items.reduce((total, item) => total + item.valor, 0));

export const notaService = {

  listAll()
  {
    return fetch(API)
      .then(handleStatus)
      .then(notas => Maybe.of(notas))
      .catch(err => {
        console.log(err);
        Promise.reject('Nao foi possivel obter as notas');
      });
  },

  sumItems(code)
  {
    const filterItems = partialize(filterItemsByCode, code);
    const sumItems = pipe(
      getItemsFromNotas,
      filterItems, 
      sumItemsValue,
    );

    return this.listAll()
    .then(sumItems)
    .then(result => result.getOrElse(0)); // Monada
  }
};