// js/DOMUtility/PageManager.js
import Utility from './Utility.js';
import Controller from './Controller.js';  
import FormMain from '../FormUtility/FormMain.js'; // Import FormMain


export default class PageManager {
    constructor() {
        this.utility = new Utility();
        this.controller = new Controller(this.utility);  // Create an instance of Controller     
        this.root = this.utility.fs('#root');
        this.formMain = new FormMain('form-container'); // Create an instance of FormMain
    }

    init() {
        this.createButtons();
        this.setupEventListeners();
        this.loadPageBasedOnURL(); // Call the function to handle direct URL access
    }

    createButtons() {
        const buttonData = [
            {
                tagName: 'button',
                content: 'Load About Page',
                attributes: { id: 'loadAbout' }
            },
            {
                tagName: 'button',
                content: 'Load Contact Page',
                attributes: { id: 'loadContact' }
            }
        ];

        const buttons = this.utility.createElements(buttonData);
        buttons.forEach(button => this.root.appendChild(button));
    }

    setupEventListeners() {
        const aboutButton = this.utility.fs('#loadAbout');
        const contactButton = this.utility.fs('#loadContact');
        const servicesLink = this.utility.fs('#services');
        
        if (aboutButton) {
            aboutButton.addEventListener('click', () => {
                history.pushState({}, '', 'about'); // Update URL without reloading
                this.controller.loadAboutPage(); 
            });
        }

        if (contactButton) {
            contactButton.addEventListener('click', () => {
                history.pushState({}, '', 'contact'); // Update URL without reloading
                this.controller.loadContactForm(this.formMain); 
                this.controller.loadContactPage();
            });
        }
        if (servicesLink) {
            servicesLink.addEventListener('click', () => {
                history.pushState({}, '', 'services'); // Update URL without reloading
                this.controller.loadServicesPage(); 
            });
        }
    }

    loadPageBasedOnURL() {
        const path = window.location.pathname;
        //const pageManager = new PageManager();
    
        if (path === '/about') {
            this.controller.loadAboutPage();
        } if (path === '/contact') {
            this.controller.loadContactPage();
        } //else {
            // Load default page or handle 404
        //}
    }
}

    // setupEventListeners() {
    //     const aboutButton = this.utility.fs('#loadAbout');
    //     const contactButton = this.utility.fs('#loadContact');
        

    //     if (aboutButton) {
    //         aboutButton.addEventListener('click', () => {
    //             this.controller.loadAboutPage(); 
    //         // Use Controller to load About Page
    //         });
    //     }

        /* 
         *  if contactButton is clicked loadContactPage
        */
//         if (contactButton) {
//             contactButton.addEventListener('click', () => {
//                 this.controller.loadContactPage(),
//                 this.controller.loadContactForm(this.formMain); 
//             // Use Controller to load Contact Page
//             });
//         }
//     }
// }

// Initialize and use PageManager independently
document.addEventListener('DOMContentLoaded', () => {
    const pageManager = new PageManager();
    pageManager.init();
});
