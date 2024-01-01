import Utility from './Utility.js';


export default class Validation {
    // Validates an email address
    validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }

    // Validates a password (basic example)
    validatePassword(password) {
        return password.length >= 8;
    }

    // Confirms that two passwords match
    confirmPassword(password, confirmPassword) {
        return password === confirmPassword;
    }

    // Additional validation methods can be added here
}
