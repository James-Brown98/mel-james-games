const clone = require('clone')

  module.exports = (state, action) => {
    const {type, payload} = action
    const newState = clone(state)

    switch(type){
      case '':
        return newState
      default:
        return newState
    }
}
