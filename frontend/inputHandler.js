// Listens to keyboard events.
class InputHandler {

  // Parameter is a function that takes in a Direction and returns void.
  // This function will get called when a key corresponding to a direction is pressed.
  constructor(callback) {
    this.callback = callback;
    const keyDown = this._keyDown.bind(this);
    window.addEventListener('keydown', keyDown);
    this.removeEventListener = function(){
        window.removeEventListener('keydown', keyDown)
    }
    window.addEventListener("keydown", function(event) {
    //4 arrow keys (left, up, right, down)
        if([37, 38, 39, 40].indexOf(event.keyCode) > -1) {
            event.preventDefault();
        }
    }, false);
  }
//stop listening to keyboard events
  stopEventListener(){
      this.removeEventListener();
  }

  // Gets called whenever any key is pressed.
  _keyDown(event) {
    const keyCode = event.key;
    let allDirections = Direction.getAll();
    for (var i = 0; i < allDirections.length; i++ ) {
      let direction = allDirections[i];
      if (keyCode == direction.getAssociatedKeycode()) {
        this.callback(direction);
      }
    }
  }
}
