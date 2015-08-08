function KeyboardControls(object, options) {
    this.object = object;
    options = options || {};
    this.domElement = options.domElement || document;
    this.moveSpeed = options.moveSpeed || 1;

    this.domElement.addEventListener('keydown', this.onKeyDown.bind(this), false);
    this.domElement.addEventListener('keyup', this.onKeyUp.bind(this), false);
}

KeyboardControls.prototype = {
    update: function() {
        if (this.moveForward) this.object.translateZ(-this.moveSpeed);
        if (this.moveBackward) this.object.translateZ(this.moveSpeed);
        if (this.moveLeft) this.object.translateX(-this.moveSpeed);
        if (this.moveRight) this.object.translateX(this.moveSpeed);
    },
    onKeyDown: function(event) {
        switch (event.keyCode) {
            /* up */
            case 38:
            /* W */
            case 87:
                this.moveForward = true;
                break;

            /* left */
            case 37:
            /* A */
            case 65:
                this.moveLeft = true;
                break;

            /* down */
            case 40:
            /* S */
            case 83:
                this.moveBackward = true;
                break;

            // right
            case 39:
            // D
            case 68:
                this.moveRight = true;
                break;
        }
    },
    onKeyUp: function(event) {
        console.log(event.keyCode);
        switch (event.keyCode) {
            // up
            case 38:
            // W
            case 87:
                this.moveForward = false;
                break;

            // left
            case 37:
            // A
            case 65:
                this.moveLeft = false;
                break;

            //down
            case 40:
            // S
            case 83:
                this.moveBackward = false;
                break;

            // right & D
            case 39:
            case 68:
                this.moveRight = false;
                break;
        }
    }
};