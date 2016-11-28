const {createStore} = require('redux')
const html = require('yo-yo')

const reducer = require('./reducer')

const initialState = {
  playerPosition: [Math.random()* 600, Math.random()* 600]
}

const {dispatch, subscribe, getState} = createStore(reducer, initialState)

const updateView () => {
  const state = getState()
  const newView = template(state, dispatch)
  html.update(view, newView)
}

subscribe(updateView)

const view = template(initialState, dispatch)
document.body.appendChild(view)
