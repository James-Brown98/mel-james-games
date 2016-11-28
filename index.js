const {createStore} = require('redux')
const html = require('yo-yo')

const reducer = require('./reducer')
const template = require('./views/game')

const initialState = {
  playerPosition: [Math.random()* 600, -Math.random()* 600]
}

const {dispatch, subscribe, getState} = createStore(reducer, initialState)

const updateView = () => {
  const state = getState()
  const newView = template(state, dispatch)
  html.update(view, newView)
}

subscribe(updateView)

const view = template(initialState, dispatch)

document.body.appendChild(view)
