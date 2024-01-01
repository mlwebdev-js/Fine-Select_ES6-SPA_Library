// js/FormUtility/FormModel.js
export class FormModel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.fields = [];
    }

    addField(type, attributes) {
        this.fields.push({ type, attributes });
    }

    renderForm() {
        const form = document.createElement('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = this.getFormData(form);
            this.storeFormData(formData);
        });

        this.fields.forEach(field => {
            const input = document.createElement('input');
            input.type = field.type;
            Object.keys(field.attributes).forEach(key => {
                if (key === 'class') {
                    input.className = field.attributes[key]; // Handle multiple classes
                } else {
                    input.setAttribute(key, field.attributes[key]);
                }
            });
            form.appendChild(input);
        });
        this.container.appendChild(form);
    }

    getFormData(form) {
        return Array.from(form.elements).reduce((data, element) => {
            if (element.name && element.type !== 'submit') {
                data[element.name] = element.value;
            }
            return data;
        }, {});
    }

    storeFormData(formData) {
        const uniqueId = `formData-${Date.now()}-${Math.random().toString(16).slice(2)}`;
        const storedData = JSON.parse(localStorage.getItem('formSubmissions')) || [];
        storedData.push({ id: uniqueId, ...formData });
        
        try {
            localStorage.setItem('formSubmissions', JSON.stringify(storedData));
            // Verifying if the data was saved correctly
            const verify = localStorage.getItem('formSubmissions');
            const isSuccessful = verify && JSON.parse(verify).some(item => item.id === uniqueId);
    
            console.log(isSuccessful ? "Successful Submission" : "ERROR: Unsuccessful Submission");
        } catch (error) {
            console.log("ERROR: Unsuccessful Submission");
        }
    }   
}
