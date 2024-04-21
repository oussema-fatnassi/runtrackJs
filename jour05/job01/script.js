$(document).ready(function(){
    const form = $('#form');
    const firstName = $('#first_name');
    const lastName = $('#last_name');
    const email = $('#email');
    const password = $('#password');
    const passwordConfirm = $('#confirm_password');
    const address = $('#address');
    const postalCode = $('#postal_code');

    $('#register').on('click', function(e) {
        e.preventDefault();
        checkInputs();
        var test = JSON.stringify({
            first_name: firstName.val(),
            last_name: lastName.val(),
            email: email.val(),
            password: password.val(),
            address: address.val(),
            postal_code: postalCode.val()
        });
        console.log(test);
    });
    
    const setErrorFor = (input, message) => {
        const formControl = input.closest('.input');
        const errorDisplay = formControl.find('.error');
        
        if (errorDisplay.length > 0) {
            errorDisplay.text(message);
            formControl.addClass('error').removeClass('success');
        }
    }
    
    const setSuccessFor = (input) => {
        const formControl = input.parent();
        const errorDisplay = formControl.find('.error');
    
        if (errorDisplay.length > 0) {
            errorDisplay.text('');
            input.addClass('success').removeClass('error');
            formControl.removeClass('error').addClass('success');
        }
    }
    
    const isEmail = (email) => {
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        return re.test(String(email).toLowerCase());
    }

    async function checkInputs() {
        const firstNameValue = firstName.val().trim();
        const lastNameValue = lastName.val().trim();
        const emailValue = email.val().trim();
        const passwordValue = password.val().trim();
        const passwordConfirmValue = passwordConfirm.val().trim();
        const addressValue = address.val().trim();
        const postalCodeValue = postalCode.val().trim();

        const validatePromise = new Promise((resolve, reject) => {
            // First Name
            if(firstNameValue === '') {
                setErrorFor(firstName, 'First Name cannot be blank');
                reject();
            } 
            else if (firstNameValue.length < 3) {
                setErrorFor(firstName, 'First Name must be at least 3 characters');
                reject();
            }
            else {
                setSuccessFor(firstName);
                resolve();
            }
            // Last Name
            if(lastNameValue === '') {
                setErrorFor(lastName, 'Last Name cannot be blank');
                reject();
            } 
            else if (lastNameValue.length < 3) {
                setErrorFor(lastName, 'Last Name must be at least 3 characters');
                reject();
            }
            else {
                setSuccessFor(lastName);
                resolve();
            }
            // Email
            if(emailValue === '') {
                setErrorFor(email, 'Email cannot be blank');
                reject();
            } else if (!isEmail(emailValue)) {
                setErrorFor(email, 'Email is not valid');
                reject();
            } else {
                setSuccessFor(email);
                resolve();
            }
            // Password
            if (passwordValue === '') {
                setErrorFor(password, 'Password cannot be blank');
                reject();
            }
            else if (passwordValue.length < 8) {
                setErrorFor(password, 'Password must be at least 8 characters');
                reject();
            }
            else if (!/[A-Z]/.test(passwordValue)) {
                setErrorFor(password, 'Password must contain at least one uppercase letter');
                reject();
            }
            else if (!/[a-z]/.test(passwordValue)) {
                setErrorFor(password, 'Password must contain at least one lowercase letter');
                reject();
            }
            else if (!/\d/.test(passwordValue)) {
                setErrorFor(password, 'Password must contain at least one number');
                reject();
            }
            else if (!/[!\"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/.test(passwordValue)) {
                setErrorFor(password, 'Password must contain at least one special character');
                reject();
            }
            else {
                setSuccessFor(password);
                resolve();
            }
            // Password Confirm
            if(passwordConfirmValue === '') {
                setErrorFor(passwordConfirm, 'Password cannot be blank');
                reject();
            } else if(passwordValue !== passwordConfirmValue) {
                setErrorFor(passwordConfirm, 'Passwords do not match');
                reject();
            } else{
                setSuccessFor(passwordConfirm);
                resolve();
            }
            // Address
            if(addressValue === '') {
                setErrorFor(address, 'Address cannot be blank');
                reject();
            } else {
                setSuccessFor(address);
                resolve();
            }
            // Postal Code
            if(postalCodeValue === '') {
                setErrorFor(postalCode, 'Postal Code cannot be blank');
                reject();
            } else {
                setSuccessFor(postalCode);
                resolve();
            }
        });

        try {
            await validatePromise;
        } catch (error) {
            return;
        }
    }
});
