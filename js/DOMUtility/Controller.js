// js/DOMUtility/Controller.js
export default class Controller {
    constructor(utility, validation) {
        this.utility = utility;
        this.validation = validation;
    }

    loadAboutPage() {
        this.utility.loadHtmlTemplate('./templates/about.html', '#contentArea');
    }
    // 
    loadContactPage() {
        this.utility.loadHtmlTemplate('./templates/contact.html', '#contentArea');
    }
}
// End Controller.js


