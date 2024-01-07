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
                        attributes: { href: '#store', id: 'store' }
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
                        attributes: { href: '#services', id: 'services' }
                    }
                ]
            }
            // ... more li elements with nested a tags ...
        ];
        const navlinks = this.utility.createElements(NavBarData);
        navlinks.forEach(navlink => this.nav_ul.appendChild(navlink));
    }
    setupEventListeners() {
        const storeLink = this.utility.fs('#store');
        const servicesLink = this.utility.fs('#services');
        
        if (storeLink) {
            storeLink.addEventListener('click', () => {
                history.pushState({}, '', 'store'); // Update URL without reloading
                this.controller.loadStorePage();
            });
        }
        if (servicesLink) {
            servicesLink.addEventListener('click', () => {
                history.pushState({}, '', 'services'); // Update URL without reloading
                this.controller.loadServicesPage();
            });
        }
    }
}
// Usage of NavBarBuilder
document.addEventListener('DOMContentLoaded', () => {
    const navBarBuilder = new NavBarBuilder();
    navBarBuilder.initializeApp();
});
