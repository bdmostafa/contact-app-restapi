import { http } from './http';
import { ui } from './ui';

// Getting contracts when DOM loaded
document.addEventListener('DOMContentLoaded', getContacts);

function getContacts() {
    http
        .get('http://localhost:3000/contacts')
        .then(contacts => ui.showContacts(contacts))
        .catch(err => console.log(err))
}
