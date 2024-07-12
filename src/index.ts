import'./components/my-element'

function checkCustomElement() {
    if (customElements.get('my-element')) {
        console.log('my-element is defined.');
        const app = document.getElementById('app');
        app!.innerHTML = '<my-element name="Lit"></my-element>';
    } else {
        console.log('my-element is not defined.');
    }
}

// Call the function to check if the custom element is defined
checkCustomElement();