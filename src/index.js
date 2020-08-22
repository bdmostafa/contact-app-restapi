// Importing http and ui
import { http } from './http';
import { ui } from './ui';

// Selectors and addEventListeners =============================================
// Getting contracts when DOM loaded
document.addEventListener('DOMContentLoaded', getContacts);
// Handle form submit
document.getElementById('submit').addEventListener('click', submitContact);
// Delete contact
document.getElementById('contact-list').addEventListener('click', deleteContact);
// Update contact
document.getElementById('contact-list').addEventListener('click', editContact);
// Handle back button by event delegation
document.getElementById('form').addEventListener('click', backFromUpdate);

// Functions ======================================
function getContacts() {
    http
        .get('http://localhost:3000/contacts')
        .then(contacts => ui.showContacts(contacts))
        .catch(() => ui.showAlert('Oops! Problem found in getting contacts. Please try again!'))
}


function submitContact(e) {
    e.preventDefault();
    // Selectors
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const id = document.getElementById('id').value;

    // Validation
    if (firstName === '' || lastName === '' || email === '' || phone === '') {
        // console.log("Please provide necessary information.");
        ui.showAlert('Please provide necessary information.', 'danger')
    } else {
        // Sending data to to Server
        const data = {
            firstName,
            lastName,
            email,
            phone
        }
        // Checking state of form whether id is empty string in user's add state or not
        if (id === '') {
            // Applying POST method under http.js
            http
                .post('http://localhost:3000/contacts', data)
                .then(() => {
                    // console.log(data);
                    ui.clearFields();
                    getContacts();
                    ui.showAlert('Contact is added successfully.', 'success');
                })
        } else {
            // If id is not empty string, Update contacts in the server
            http
                .update(`http://localhost:3000/contacts/${id}`, data)
                .then(() => {
                    ui.clearFields();
                    // Changing state of the selected contact
                    ui.changeState('add');
                    // Display updated contact information on UI
                    getContacts();
                    // Show alert
                    ui.showAlert('Contact updated successfully', 'success')
                })
        }
    }
}

function deleteContact(e) {
    // console.log(e.target);
    const id = e.target.dataset.id;
    // console.log(id);
    if (e.target.classList.contains('fa-trash')) {
        http
            .delete(`http://localhost:3000/contacts/${id}`)
            .then(() => {
                ui.showAlert('Contact deleted successfully.', 'warning');
                getContacts();
            })
            .catch(err => {
                // console.log(err);
                ui.showAlert('Oops! Something error. Please try again.', 'danger');
            });
    }
}

function editContact(e) {
    const id = e.target.dataset.id;
    // Checking edit icon of target event
    if (e.target.classList.contains('fa-edit')) {
        // Request for getting the selected data
        http
            .get(`http://localhost:3000/contacts/${id}`)
            .then(data => {
                // console.log(data);
                ui.fillForm(data);
                ui.handleBtnEdit();
            })
    }
}

function backFromUpdate(e) {
    // console.log(e.target.id);
    e.preventDefault();

    if (e.target.id === 'back-btn') {
        // Changing form to add state
        ui.changeState('add');
        ui.clearFields();
    }
}