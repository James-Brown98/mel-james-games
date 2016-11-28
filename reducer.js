const clone = require('clone')

  module.exports = (state, action) => {
    const {type, payload} = action
    const newState = clone(state)

    switch(type){
      case 'MOVE_UP':
        newState.playerPosition[0] -= payload
        return newState
      case 'MOVE_DOWN':
        newState.playerPosition[0] += payload
        return newState
      case 'MOVE_LEFT':
        newState.playerPosition[1] += payload
        return newState
      case 'MOVE_RIGHT':
        newState.playerPosition[1] -= payload
        return newState
      default:
        return newState
    }
}
