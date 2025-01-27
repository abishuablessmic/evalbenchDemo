// This file contains the JavaScript code for the landing page. 
// It includes functionality for user interactions and dynamic features.

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cta-button');
    
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked! Welcome to Evalbench Demo!');
        });
    }
});