// js/DOMUtility/ContentMain.js
import Utility from './Utility.js';
import PageManager from './PageManager.js';
import Controller from './Controller.js';

export default class ContentMain {
    constructor(controller) {
        this.utility = new Utility();
        this.controller = new Controller(this.utility);
        this.pageManager = new PageManager(this.controller);
        this.controller = controller;
        this.nav_ul = this.utility.fs('#nav-ul');
    }

    initializeApp() {
        this.setupDynamicContent();
    }

    setupDynamicContent() {
        const elementData = [
            {
                tagName: 'li',
                attributes: { class: 'nav-item' },
                children: [
                    {
                        tagName: 'a',
                        content: 'Home',
                        attributes: { href: '#home' }
                    }
                ]
            },
            {
                tagName: 'li',
                attributes: { class: 'nav-item' },
                children: [
                    {
                        tagName: 'a',
                        content: 'About',
                        attributes: { href: '#about' }
                    }
                ]
            }
            // ... more li elements with nested a tags ...
        ];

        const elements = this.utility.createElements(elementData);
        elements.forEach(element => this.pageManager.nav_ul.appendChild(element));
    }
}

// Usage of ContentMain
document.addEventListener('DOMContentLoaded', () => {
    const contentMain = new ContentMain();
    contentMain.initializeApp();
});
