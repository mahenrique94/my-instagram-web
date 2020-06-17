import { config } from '@config'

import Environments from '@constants/Environments'

import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import { epics } from './epics'
import { history } from './history'
import { reactotron } from './reactotron'
import { reducers } from './reducers'

const isDevelopment = config.app.environment === Environments.development

const logger = createLogger()
const reduxObservable = createEpicMiddleware()

const enhancers = []
const middlewares = [reduxObservable, routerMiddleware(history)]

if (isDevelopment) {
  enhancers.push(reactotron.createEnhancer!())
  middlewares.push(logger)
}

const store = createStore(
  // @ts-ignore
  connectRouter(history)(reducers),
  compose(composeWithDevTools(applyMiddleware(...middlewares), ...enhancers)),
)

reduxObservable.run(epics)

export { store }
