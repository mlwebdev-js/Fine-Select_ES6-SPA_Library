// js/DOMUtility/PageManager.js
import Utility from './Utility.js';
import Controller from './Controller.js';  // Import Controller

export default class PageManager {
    constructor() {
        this.utility = new Utility();
        this.controller = new Controller(this.utility);  // Create an instance of Controller
        this.root = this.utility.fs('#root');
    }

    init() {
        this.createButtons();
        this.setupEventListeners();
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

        if (aboutButton) {
            aboutButton.addEventListener('click', () => {
                this.controller.loadAboutPage();  // Use Controller to load About Page
            });
        }

        if (contactButton) {
            contactButton.addEventListener('click', () => {
                this.controller.loadContactPage();  // Use Controller to load Contact Page
            });
        }
    }
}

// Initialize and use PageManager independently
document.addEventListener('DOMContentLoaded', () => {
    const pageManager = new PageManager();
    pageManager.init();
});
