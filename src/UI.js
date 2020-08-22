class UI {
    constructor() {
        this.contactDisplay = document.getElementById('contact-list');
        this.firstName = document.getElementById('firstName');
        this.lastName = document.getElementById('lastName');
        this.email = document.getElementById('email');
        this.phone = document.getElementById('phone');
        this.submitBtn = document.getElementById('submit');
        this.parentSubmitBtn = document.getElementById('parent-submit-btn');
        this.idInput = document.getElementById('id');
        this.form = document.getElementById('form');

    }
    showContacts(contacts) {
        let output = '';
        // console.log(contacts);
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
    fillForm({ firstName, lastName, email, phone, id }) {
        this.firstName.value = firstName;
        this.lastName.value = lastName;
        this.email.value = email;
        this.phone.value = phone;
        this.idInput.value = id;
    }
    handleBtnEdit() {
        // Change submit button to update button
        this.submitBtn.textContent = 'Update';
        this.submitBtn.classList.remove('btn-primary');
        this.submitBtn.classList.add('btn-info');
        // Create Back button
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-danger w-100 mb-1';
        backBtn.id = 'back-btn';
        backBtn.textContent = 'Back';
        // Insert backBtn
        this.parentSubmitBtn.insertBefore(backBtn, this.submitBtn);
    }
    changeState(state) {
        if (state === 'add') {
            if (document.getElementById('back-btn')) {
                document.getElementById('back-btn').remove();
            }
            this.submitBtn.textContent = 'Submit';
            this.submitBtn.classList.remove('btn-info');
            this.submitBtn.classList.add('btn-primary');
            this.idInput.value = '';
        }
    }
    clearFields() {
        this.firstName.value = '';
        this.lastName.value = '';
        this.email.value = '';
        this.phone.value = '';
    }
    showAlert(msg, className) {
        // Create div element
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.textContent = msg;
        this.form.insertBefore(div, this.parentSubmitBtn)
        // Remove alert msg after 3 second automatically
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }
    clearAlert() {
        if (document.querySelector('.alert')) {
            document.querySelector('.alert').remove();
        }
    }
}

export const ui = new UI();