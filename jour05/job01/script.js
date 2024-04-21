$(document).ready(function(){
    const form = $('#form');
    const firstName = $('#first_name');
    const lastName = $('#last_name');
    const email = $('#email');
    const password = $('#password');
    const passwordConfirm = $('#confirm_password');
    const address = $('#address');
    const postalCode = $('#postal_code');

    // Redirect to registration page
    function redirectToRegistration() {
        window.location.href = 'registration.html';
    }
    // Redirect to connection page
    function redirectToConnection() {
        window.location.href = 'connection.html';
    }
    // Empty inputs of connection page
    function emptyInputsConnection() {
        email.val('');
        password.val('');
    }
    // Empty inputs of registration page
    function emptyInputsRegistration() {
        firstName.val('');
        lastName.val('');
        email.val('');
        password.val('');
        passwordConfirm.val('');
        address.val('');
        postalCode.val('');
    }

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
    // Check if email is valid
    const isEmail = (email) => {
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        return re.test(String(email).toLowerCase());
    }
    // Hash password
    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hash = await crypto.subtle.digest('SHA-256', data);
        const hashedPassword = Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
        return hashedPassword;
      }
    // Check inputs if they are valid or not
    async function checkInputs() {
        const firstNameValue = firstName.val().trim();
        const lastNameValue = lastName.val().trim();
        const emailValue = email.val().trim();
        const passwordValue = password.val().trim();
        const passwordConfirmValue = passwordConfirm.val().trim();
        const addressValue = address.val().trim();
        const postalCodeValue = postalCode.val().trim();
    
        const validatePromise = new Promise((resolve, reject) => {
            let isValid = true;
            // First Name
            if(firstNameValue === '') {
                setErrorFor(firstName, 'First Name cannot be blank');
                isValid = false;
            } else if (firstNameValue.length < 3) {
                setErrorFor(firstName, 'First Name must be at least 3 characters');
                isValid = false;
            } else {
                setSuccessFor(firstName);
            }
            // Last Name
            if(lastNameValue === '') {
                setErrorFor(lastName, 'Last Name cannot be blank');
                isValid = false;
            } else if (lastNameValue.length < 3) {
                setErrorFor(lastName, 'Last Name must be at least 3 characters');
                isValid = false;
            } else {
                setSuccessFor(lastName);
            }
            // Email
            if(emailValue === '') {
                setErrorFor(email, 'Email cannot be blank');
                isValid = false;
            } else if (!isEmail(emailValue)) {
                setErrorFor(email, 'Email is not valid');
                isValid = false;
            } else {
                setSuccessFor(email);
            }
            // Password
            if (passwordValue === '') {
                setErrorFor(password, 'Password cannot be blank');
                isValid = false;
            } else if (passwordValue.length < 8) {
                setErrorFor(password, 'Password must be at least 8 characters');
                isValid = false;
            } else if (!/[A-Z]/.test(passwordValue)) {
                setErrorFor(password, 'Password must contain at least one uppercase letter');
                isValid = false;
            } else if (!/[a-z]/.test(passwordValue)) {
                setErrorFor(password, 'Password must contain at least one lowercase letter');
                isValid = false;
            } else if (!/\d/.test(passwordValue)) {
                setErrorFor(password, 'Password must contain at least one number');
                isValid = false;
            } else if (!/[!\"#$%&'()*+,-.\/:;<=>?@[\\\]^_`{|}~]/.test(passwordValue)) {
                setErrorFor(password, 'Password must contain at least one special character');
                isValid = false;
            } else {
                setSuccessFor(password);
            }
            // Password Confirm
            if(passwordConfirmValue === '') {
                setErrorFor(passwordConfirm, 'Password cannot be blank');
                isValid = false;
            } else if(passwordValue !== passwordConfirmValue) {
                setErrorFor(passwordConfirm, 'Passwords do not match');
                isValid = false;
            } else{
                setSuccessFor(passwordConfirm);
            }
            // Address
            if(addressValue === '') {
                setErrorFor(address, 'Address cannot be blank');
                isValid = false;
            } else {
                setSuccessFor(address);
            }
            // Postal Code
            if(postalCodeValue === '') {
                setErrorFor(postalCode, 'Postal Code cannot be blank');
                isValid = false;
            } else {
                setSuccessFor(postalCode);
            }
            if (isValid) {
                resolve();
            } else {
                reject();
            }
        });

        try {
            await validatePromise;
            const hashedPassword = await hashPassword(passwordValue);
            console.log('Hashed Password: ' + hashedPassword);
            return true;
        } catch (error) {
            return false;
        }
    }   
     // Create account and store it in IndexedDB
    async function createAccount() {
        const userAccount = {
            first_name: firstName.val().trim(),
            last_name: lastName.val().trim(),
            email: email.val().trim(),
            password: await hashPassword(password.val().trim()),
            address: address.val().trim(),
            postal_code: postalCode.val().trim()
        };
    
        const dbPromise = new Promise((resolve, reject) => {
            const request = indexedDB.open('userAccounts', 1);
    
            request.onupgradeneeded = function(event) {
                const db = event.target.result;
                const objectStore = db.createObjectStore('users', { keyPath: 'email' });
            };
    
            request.onsuccess = function(event) {
                const db = event.target.result;
                const transaction = db.transaction(['users'], 'readwrite');
                const objectStore = transaction.objectStore('users');
    
                const request = objectStore.add(userAccount);
                request.onsuccess = function(event) {
                    resolve();
                };
                request.onerror = function(event) {
                    reject('Failed to add user account to IndexedDB');
                };
            };
    
            request.onerror = function(event) {
                reject('Failed to open IndexedDB');
            };
        });
    
        try {
            await dbPromise;
            console.log('User Account created and saved successfully');
            console.log(userAccount);
        } catch (error) {
            console.error(error);
        }
    }
    

    // Check credentials of the user account in local storage and compare them with the inputs of the connection page
    async function checkCredentials() {
        const emailValue = email.val().trim();
        const passwordValue = await hashPassword(password.val().trim());
    
        const dbPromise = new Promise((resolve, reject) => {
            const request = indexedDB.open('userAccounts', 1);
    
            request.onsuccess = function(event) {
                const db = event.target.result;
                const transaction = db.transaction(['users'], 'readonly');
                const objectStore = transaction.objectStore('users');
    
                const getRequest = objectStore.get(emailValue);
                getRequest.onsuccess = function(event) {
                    const userAccount = event.target.result;
    
                    if (!userAccount) {
                        setErrorFor(email, 'Account does not exist');
                        emptyInputsConnection();
                        alert('Account does not exist, click on the Register button to create an account');
                        resolve();
                        return;
                    }
    
                    if (userAccount.email === emailValue && userAccount.password === passwordValue) {
                        console.log('Credentials are correct');
                        alert('Credentials are correct');
                        emptyInputsConnection();
                    } else if (userAccount.email !== emailValue) {
                        setErrorFor(email, 'Invalid email');
                    } else if (userAccount.password !== passwordValue) {
                        setErrorFor(password, 'Invalid password');
                    } else {
                        setErrorFor(email, 'Invalid email and password');
                    }
    
                    resolve();
                };
    
                getRequest.onerror = function(event) {
                    reject('Failed to get user account from IndexedDB');
                };
            };
    
            request.onerror = function(event) {
                reject('Failed to open IndexedDB');
            };
        });
    
        try {
            await dbPromise;
        } catch (error) {
            console.error(error);
        }
    }
    
    // Register button event listener: check inputs, create account, alert message, empty inputs, redirect to connection page
    $('#register').on('click', async function(e) {
        e.preventDefault();
        const isValid = await checkInputs();
        if (!isValid) {
            alert('Please fix the errors and try again');
            return;
        }
        try {
            await createAccount();
            alert('Account created successfully');
            emptyInputsRegistration();
            redirectToConnection();
        } catch (error) {
            alert('Failed to create account');
            console.error(error);
        }
    });
    // Redirect to registration page
    $('#register_redirect').on('click', redirectToRegistration);
    // Connection button event listener: check credentials
    $('#connection').on('click', async function(e) {
        e.preventDefault();
        await checkCredentials();
    });
});