class UI {
    constructor() {
        this.contactDisplay = document.getElementById('contact-list');
        this.firstName = document.getElementById('firstName');
        this.lastName = document.getElementById('lastName');
        this.email = document.getElementById('email');
        this.phone = document.getElementById('phone');
    }
    showContacts(contacts) {
        let output = '';
        contacts.forEach(contact => {
            // Object destructuring
            const { firstName, lastName, email, phone } = contact;
            output += `
                        <tr>
                            <!-- <th scope="row">1</th> -->
                            <td>${firstName} ${lastName}</td>
                            <td>${email}</td>
                            <td>${phone}</td>
                            <td><i class="fa fa-trash text-danger" data-id="${contact.id}"></i> <i class="fa fa-edit text-primary" data-id="${contact.id}"></i></td>
                        </tr>
                    `
            this.contactDisplay.innerHTML = output;
        })
    }
    clearFields() {
        this.firstName.value = '';
        this.lastName.value = '';
        this.email.value = '';
        this.phone.value = '';
    }
}

export const ui = new UI();