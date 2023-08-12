import exampleFunction from '../__modules/example';

// GLOBAL APP CONTROLLER
const controller = {
    init() {},
    loaded() {
        exampleFunction();
    },
    resized() {},
    mouseUp(e) {},
	keyDown(e) {},
    scrolled(e) {},
};

export default controller;
