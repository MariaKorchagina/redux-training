import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {

    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(reducer);

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch({ type: 'INC' });
  });

document
  .getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch({ type: 'DEC' });
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
}

store.subscribe(update)

//store.subscribe(() => {
  //store.subscribe(() - подписаться на обновление store
  //console.log(store.getState());
  //store.getState()) - получаем текущий state;
//})

// console.log(store.getState());
//store.dispatch({ type: 'INC' });
//store.dispatch({ type: 'INC' }); - для того,чтобы обработать какое-то действие
//store.dispatch({ type: 'INC' });
// console.log(store.getState());

  //   if (action.type === 'INC') {
  //     return state + 1;
  //   }
  //   return 0;
  // }

  // if (state === undefined) {
  //   return 0;
  // }

// let state = reducer(undefined, {});

// state = reducer(state, { type: 'INC' });
// console.log(state);
// state = reducer(state, { type: 'INC' });
// console.log(state);