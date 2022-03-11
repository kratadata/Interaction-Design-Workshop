## sketch2.js

The boolean system variable `mouseIsPressed` is true if the mouse is pressed and false if not.

The system variable `mouseX` always contains the current horizontal position of the mouse, relative to (0, 0) of the canvas.

The system variable `pmouseX` always contains the horizontal position of the mouse or finger in the frame previous to the current frame, relative to (0, 0) of the canvas

The system variable `mouseY` always contains the current vertical position of the mouse, relative to (0, 0) of the canvas.

The system variable `pmouseY` always contains the vertical position of the mouse or finger in the frame previous to the current frame, relative to (0, 0) of the canvas.

<br/>

## sketch3.js

There are a few of mouse input functions that allow you to react to more specific events:

`mousePressed()` is called once when the user presses the mouse button. This is the first half of a click.
`mouseReleased() `is called once when the user releases the mouse button. This is the second half of a click.
`mouseClicked()` is called when the mouse is clicked. This is a press and a release!
`mouseMoved()` is called whenever the mouse moves.
`mouseDragged()` is called, you guessed it, whenever the mouse is moved while its button is pressed.
`mouseWheel()` is called when you scroll with the mouse wheel.
If you need to know which mouse button is pressed, check out the `mouseButton` variable.

<br/>

## sketch4.js

Similar to how the `mouseIsPressed` variable is true whenever the user is pressing a mouse button, the `keyIsPressed` variable is true whenever the user is pressing a key on the keyboard.

The system variable key contains the value of the most recent key on the keyboard that was typed.

The variable `keyCode `is used to detect non ASCII keys such as ***BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW***
