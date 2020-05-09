import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import persistReducer from './persistReduce'

import createStore from './createStore'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMonitor = console.tron.createSagaMonitor()

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const middlewares = [sagaMiddleware]

const store = createStore(persistReducer(rootReducer), middlewares)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
