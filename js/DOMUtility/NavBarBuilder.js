// js/DOMUtility/NavBarBuilder.js
import Utility from './Utility.js';
import Controller from './Controller.js';

export default class NavBarBuilder {
    constructor() {
        this.utility = new Utility();
        this.controller = new Controller(this.utility);
        this.nav_ul = this.utility.fs('#nav-ul');
    }

    initializeApp() {
        this.setupDynamicNav();
        this.setupEventListeners();
    }

    setupDynamicNav() {
        const NavBarData = [
            {
                tagName: 'li',
                attributes: { class: 'nav-item' },
                children: [
                    {
                        tagName: 'a',
                        content: 'Store',
                        attributes: { href: '#', id: 'store' }
                    }
                ]
            },
            {
                tagName: 'li',
                attributes: { class: 'nav-item' },
                children: [
                    {
                        tagName: 'a',
                        content: 'Services',
                        attributes: { href: '#', id: 'services' }
                    }
                ]
            }
            // ... more li elements with nested a tags ...
        ];

        const navlinks = this.utility.createElements(NavBarData);
        navlinks.forEach(navlink => this.nav_ul.appendChild(navlink));
    }

    setupEventListeners() {
        this.addNavLinkListener('store', () => this.controller.loadStorePage());
        this.addNavLinkListener('services', () => this.controller.loadServicesPage());
    }

    addNavLinkListener(id, callback) {
        const link = this.utility.fs(`#${id}`);
        if (link) {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default anchor behavior
                history.pushState({}, '', id); // Update URL without reloading
                callback(); // Call the callback function
            });
        }
    }
}

// Usage of NavBarBuilder
document.addEventListener('DOMContentLoaded', () => {
    const navBarBuilder = new NavBarBuilder();
    navBarBuilder.initializeApp();
});
