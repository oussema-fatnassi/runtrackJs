$(document).ready(function(){
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

    function checkInputs() {
        const firstNameValue = firstName.val().trim();
        const lastNameValue = lastName.val().trim();
        const emailValue = email.val().trim();
        const passwordValue = password.val().trim();
        const passwordConfirmValue = passwordConfirm.val().trim();
        const addressValue = address.val().trim();
        const postalCodeValue = postalCode.val().trim();

        // First Name
        if(firstNameValue === '') {
            setErrorFor(firstName, 'First Name cannot be blank');
        } 
        else if (firstNameValue.length < 3) {
            setErrorFor(firstName, 'First Name must be at least 3 characters');
        }
        else {
            setSuccessFor(firstName);
        }
        // Last Name
        if(lastNameValue === '') {
            setErrorFor(lastName, 'Last Name cannot be blank');
        } 
        else if (lastNameValue.length < 3) {
            setErrorFor(lastName, 'Last Name must be at least 3 characters');
        }
        else {
            setSuccessFor(lastName);
        }
        // Email
        if(emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }
        // Password
        if (passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
            return;
        }
        else if (passwordValue.length < 8) {
            setErrorFor(password, 'Password must be at least 8 characters');
            return;
        }
        else if (!/[A-Z]/.test(passwordValue)) {
            setErrorFor(password, 'Password must contain at least one uppercase letter');
            return;
        }
        else if (!/[a-z]/.test(passwordValue)) {
            setErrorFor(password, 'Password must contain at least one lowercase letter');
            return;
        }
        else if (!/\d/.test(passwordValue)) {
            setErrorFor(password, 'Password must contain at least one number');
            return;
        }
        else if (!/[!\"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/.test(passwordValue)) {
            setErrorFor(password, 'Password must contain at least one special character');
            return;
        }
        
        setSuccessFor(password);
        // Password Confirm
        if(passwordConfirmValue === '') {
            setErrorFor(passwordConfirm, 'Password cannot be blank');
        } else if(passwordValue !== passwordConfirmValue) {
            setErrorFor(passwordConfirm, 'Passwords do not match');
        } else{
            setSuccessFor(passwordConfirm);
        }
        // Address
        if(addressValue === '') {
            setErrorFor(address, 'Address cannot be blank');
        } else {
            setSuccessFor(address);
        }
        // Postal Code
        if(postalCodeValue === '') {
            setErrorFor(postalCode, 'Postal Code cannot be blank');
        } else {
            setSuccessFor(postalCode);
        }
    }
});