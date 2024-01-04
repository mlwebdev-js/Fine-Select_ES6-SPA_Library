// js/DOMUtility/MainContent.js
import Utility from './Utility.js';
import PageManager from './PageManager.js';
import Controller from './Controller.js';
// import Validation from './Validation.js';


export default class MainContent {
    constructor() {
        this.utility = new Utility();
        this.controller = new Controller(this.utility);
        this.pageManager = new PageManager(this.controller);
        this.nav_bar = this.utility.fs('#nav-bar'); 
    }


    initializeApp() {
        this.setupDynamicContent();
        // Any other initialization logic...
    }

    createNavigationMenu() {
        // Define the list items
        const listItemData = [
            { tagName: 'li', content: '', attributes: { class: 'nav-item' } },
            // ... more list items ...
        ];

        // Create list items
        const listItems = this.utility.createElements(listItemData);

        // Append anchor tags to each list item and then append them to the root
        listItems.forEach(li => {
            const anchor = document.createElement('a');
            anchor.setAttribute('href', '#');
            anchor.textContent = 'Click Me'; // Customize as needed
            li.appendChild(anchor);
            this.root.appendChild(li);
        });
    }

    setupDynamicContent() {
    // Define the elements to create
    // Example of dynamically creating layout
    const elementData = [
        {
            tagName: 'div',
            content: `Dynamic Element 1 with id: ${'dynamic1'}`, // Updated content`,
            attributes: { 
                id: 'dynamic1', 
                class: 'dynamic-class'
            }
        },
        {
            tagName: 'div',
            content: 'Dynamic Element 2',
            attributes: { 
                id: 'dynamic2', 
                class: 'dynamic-class'   
            }
        }
    ];

    // Use PageManager to create and append the elements
    this.pageManager.createDynamicLayout(elementData);
    }
}

// Usage of MainContent
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = new MainContent();
    mainContent.initializeApp();
});