import { http } from './http';
import { ui } from './ui';

// Getting contracts when DOM loaded
document.addEventListener('DOMContentLoaded', getContacts);
// Handle form submit
document.getElementById('form').addEventListener('submit', submitContact);
// Delete contact
document.getElementById('contact-list').addEventListener('click', deleteContact);

function getContacts() {
    http
        .get('http://localhost:3000/contacts')
        .then(contacts => ui.showContacts(contacts))
        .catch(err => console.log(err))
}


function submitContact(e) {
    e.preventDefault();
    // Selectors
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validation
    if (firstName === '' || lastName === '' || email === '' || phone === '') {
        console.log("Please provide necessary information.");
    } else {
        // Sending data to to Server
        const data = {
            firstName,
            lastName,
            email,
            phone
        }
        // Applying POST method under http.js
        http
            .post('http://localhost:3000/contacts', data)
            .then(() => {
                // console.log(data);
                ui.clearFields();
                getContacts();
            })

    }
}

function deleteContact(e) {
    // console.log(e.target);
    const id = e.target.dataset.id;
    console.log(id);
    if (e.target.classList.contains('fa-trash')) {
        http
            .delete(`http://localhost:3000/contacts/${id}`)
            .then(() => {
                console.log('contact deleted.');
                getContacts();
            })
            .catch(err => console.log(err));
    }
}