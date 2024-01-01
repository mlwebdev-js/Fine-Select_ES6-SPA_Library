// js/DOMUtility/PageManager.js
import Utility from './Utility.js';

export default class PageManager {
    // Constructor function to initialize the PageManager object. 
    /* The constructor function creates the PageManager object. 
       It takes in a controller object as a parameter, 
       which is used to load the pages that are injected to the HTML body. 
       The constructor function also creates the buttons and then sets up the event listeners. 
       The init() function is called to initialize the object. */
    constructor(controller) {
        this.utility = new Utility();
        this.controller = controller;
        this.root = this.utility.fs('#root');
        this.init();
    }

    // Initialize the PageManager object.
    init() {
        this.createButtons();
        this.setupEventListeners();
    }

    createButtons() {
        // Define buttonsS
        /* Array of objects with tagName, content, and attributes properties. 
         * tagName is the tag name of the button element, 
         * content is the text content of the button, 
         * and attributes is an object with key-value pairs 
         * for the attributes of the button element. 
         */
        const buttonData = [
            { 
                tagName: 'button', 
                content: 'Load About Page', 
                attributes: { 
                    id: 'loadAbout' 
                    } 
                },
            { 
                tagName: 'button', 
                content: 'Load Contact Page', 
                attributes: { 
                    id: 'loadContact'
                    } 
                }
        ];

        // Create buttons and append to root
        /* Use the utility.createElements() method to create the buttons. 
         * The utility.createElements() method takes in an array of objects
         * with tagName, content, and attributes properties.
         * Appends them to the root element.
        */
        const buttons = this.utility.createElements(buttonData);
        buttons.forEach(button => this.root.appendChild(button));
    }

    setupEventListeners() {

        // Add event listeners to buttons to load pages on click
        // Note: The event listener is added to the button element, not the buttonData object. This is because the buttonData object is used to create the button element, but the event listener is added to the button element. This allows the event listener to be added to the button element, and not to the buttonData object. This is a good practice, as it keeps the event listener code separate from the button data code.
        //this.utility.fs('#loadAbout').addEventListener('click', () => this.controller.loadAboutPage());
        // this.utility.fs('#loadContact').addEventListener('click', () => this.controller.loadContactPage());

        /* Add event listeners to buttons to load pages on click 
         * using history API and pushState() method. 
         * This is a more modern approach to handling page navigation. 
         * The pushState() method is used to update the browser's history, 
         * which allows the user to navigate back and forth between pages 
         * without reloading the page. 
         * This approach is more flexible 
         * and can be used with other frameworks or libraries. 
         */
        
        this.utility.fs('#loadAbout').addEventListener('click', () => {
            history.pushState({}, '', 'about');
            this.controller.loadAboutPage();
        });
        this.utility.fs('#loadContact').addEventListener('click', () => {
            history.pushState({}, '', 'contact');
            this.controller.loadContactPage();
        });
    }
    
    /* This function takes in an array of objects with tagName, content, and attributes properties.
     * Create dynamic layout
    */
    createDynamicLayout(elementData) {
        const elements = this.utility.createElements(elementData);
        elements.forEach(element => this.root.appendChild(element));
    }
}