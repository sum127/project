import 'react-native-gesture-handler';

import React from 'react';

import createSagaMiddleware from 'redux-saga'


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import rootSaga from './redux/sagas'
import Main from './components/MainContainer'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export default function App() {


  return (
    <Provider store={store}>
      <Main />
    </Provider>
    
  );
}
