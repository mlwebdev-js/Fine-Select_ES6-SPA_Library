// js/FormUtility/FormMain.js
import { FormModel } from './FormModel.js'; // Assuming default export

export default class FormMain {
    constructor() {
        this.formModel = new FormModel('form-container');
        this.isFormRendered = false;  // Flag to track if the form is already rendered
        // this.contactFormContainer = this.utility.fs('contact-form-container');
    }

    initializeForm() {
        if (this.isFormRendered) {
            return;  // If form is already rendered, do nothing
        }
        this.addFormFields();
        this.formModel.renderForm();
        this.isFormRendered = true;  // Set flag to true after rendering
    }

    addFormFields() {

        this.formModel.addField('text', {
            placeholder: 'Enter username',
            name: 'textField',
            id: 'username',
            class: 'size-up strong-text'
        });
        this.formModel.addField('text', {
            placeholder: 'Enter password',
            name: 'textField',
            id: 'password',
            class: 'size-up strong-text'
        });
        this.formModel.addField('text', {
            placeholder: 'Confirm password',
            name: 'textField',
            id: 'confirm-password',
            class: 'size-up strong-text'
        });
        this.formModel.addField('text', {
            placeholder: 'Enter First name',
            name: 'textField',
            id: 'firstname',
            class: 'size-up strong-text'
        });

        this.formModel.addField('text', {
            placeholder: 'Enter Last name',
            name: 'textField',
            id: 'fName',
            class: 'size-up'
        });

        this.formModel.addField('email', {
            placeholder: 'Enter Email',
            name: 'emailField',
            id: 'emailId',
            class: 'size-up'
        });

        this.formModel.addField('submit', {
            value: 'Submit',
            type: 'submit',
            class: 'form-submit-button'
        });
    }
}

// Usage of FormMain
// document.addEventListener('DOMContentLoaded', () => {
//     const formMain = new FormMain();
//     formMain.initializeForm();
// });
