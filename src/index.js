import { createStore } from 'redux';
import reducer from './reducer';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app';

const store = createStore(reducer);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>);



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

