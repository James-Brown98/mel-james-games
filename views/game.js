const html = require('yo-yo');

let currentInterval

module.exports = (state, dispatch) => {
  const {playerPosition} = state
 return html`
    <div id='player' tabindex='1'
    onkeyup=${(e) => checkKey(e)}
    style='position: relative; top:${playerPosition[0]}px; right: ${playerPosition[1]}px; '
     ><img src='./monster04.png'</img></div>
`
function checkKey(e) {

   e = e || window.event;

   clearInterval(currentInterval)

   if (e.keyCode == '38') {
     // up arrow
     currentInterval = setInterval(function(){
       dispatch({type: 'MOVE_UP', payload:0.5})
   }, 0.1)
     console.log(state.playerPosition);
   }
   else if (e.keyCode == '40') {
     // down arrow
     currentInterval = setInterval(function(){
       dispatch({type: 'MOVE_DOWN', payload:0.5})
   }, 0.1)
     console.log(state.playerPosition);
   }
   else if (e.keyCode == '37') {
     // left arrow
     currentInterval = setInterval(function(){
       dispatch({type: 'MOVE_LEFT', payload:0.5})
   }, 0.1)
     console.log(state.playerPosition);
   }
   else if (e.keyCode == '39') {
     // right arrow
     currentInterval = setInterval(function(){
       dispatch({type: 'MOVE_RIGHT', payload:0.5})
   }, 0.1)
     console.log(state.playerPosition);
   }

}
}
