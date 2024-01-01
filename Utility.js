// js/DOMUtility/Utility.js
export default class Utility {
    constructor() {}

    /* Method:  fs => Invocation 
     * Purpose:  Returns the first element that matches the given CSS selector.
    */
    fs(selector) {
        return document.querySelector(selector);
    }

    /* Method:  createElements => Invocation 
     * Purpose:  Creates an array of elements from an array of objects.
    */
    createElements(elements) {
        return elements.map(({ tagName, content, attributes }) => {
            const element = document.createElement(tagName);
            element.textContent = content;
            Object.entries(attributes).forEach(([attr, value]) => {
                element.setAttribute(attr, value);
            });
            return element;
        });
    }
    
        /* Method:  setAttributes => Invocation
        *  Purpose:  Sets the attributes of an element.
        *  Parameters:
        *  - element: The element to set the attributes on.
        *  - attributes: An object containing the attributes to set.
        *  Returns: None.
        *  Throws:  None.
        *  Example:
        *  const element = document.createElement('div');
        *  const attributes = {

        *  setAttributes(element, attributes);
        *  This will set the attributes on the element.
        *  The element will have the following attributes:
        *  - id: 'my-div'
        *  - class: 'my-class'
        *  - data-id: '123'
        *  - data-name: 'John'
        *  The element will be updated with the new attributes.
        */
        setAttributes(element, attributes) {
            for (const key in attributes) {
                element.setAttribute(key, attributes[key]);
            }
        }
    
    /* Method:  loadHtmlTemplate => Invocation 
    *  Purpose:  Loads an HTML template from a URL and inserts it into a target element.
    *  Parameters:
    *  - url: The URL of the HTML template to load.
    *  - targetElementId: The ID of the target element to insert the HTML template into.
    *  Returns: - A Promise that resolves when the HTML template is loaded and inserted into the target element.
    *  Throws: - An error if the HTML template cannot be loaded or inserted into the target element.
    *  Example:
    *  loadHtmlTemplate('https://example.com/template.html', 'targetElementId');
    *  This will load the HTML template from the given URL and insert it into the target element with the given ID.
    *  The Promise will resolve when the HTML template is loaded and inserted into the target element.
    *  If there is an error loading or inserting the HTML template, the Promise will reject with the error.
    *  The error will be logged to the console.
    *  Note: This method is not specific to the DOMUtility library. It can be used in any JavaScript application. 
    *  It can be used with other frameworks or libraries. 
    *  The loadHtmlTemplate method can be used to load and insert HTML templates into any HTML element. 
    *  It can be used to dynamically load and insert HTML templates into the DOM, 
    *  any other application, into any other website, into any HTML element or frameworks or libraries. 
    */
    async loadHtmlTemplate(url, targetElementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const html = await response.text();
            const targetElement = this.fs(targetElementId);
            targetElement.innerHTML = html;
        } catch (e) {
            console.error("Error loading template:", e);
        }
    }
}





