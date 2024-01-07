// js/DOMUtility/Controller.js
export default class Controller {
    constructor(utility, validation) {
        this.utility = utility;
        this.validation = validation;
    }

    loadContactForm(formMain) {
        formMain.initializeForm(); 
        // FormMain instance will handle form rendering
    }

    loadAboutPage() {
        this.utility.loadHtmlTemplate(
            './templates/about.html', 
            '#contentArea'
        );
    }
    // 
    loadContactPage() {
        this.utility.loadHtmlTemplate(
            './templates/contact.html', 
            '#contentArea'
        );
    }
    loadStorePage() {
        this.utility.loadHtmlTemplate(
            './templates/store.html', 
            '#contentArea'
        );
    }
    loadServicesPage() {
        this.utility.loadHtmlTemplate(
            './templates/services.html', 
            '#contentArea'
        );
    }
    removeFormAndLoadAbout(formMain) {
        if (formMain.isFormRendered) {
            const formContainer = this.utility.fs(formMain.formModel.container);
            formContainer.innerHTML = ''; // Clear the form container
            formMain.isFormRendered = false; // Reset the form rendered state
        }
        this.loadAboutPage(); // Load the about page
    }
}
// End Controller.js


