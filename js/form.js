 const form = document.getElementById('form');
 const password1El = document.getElementById('password1');
 const password2El = document.getElementById('password2');
 const messageContainer = document.querySelector('.message-contaoner');
 const message = document.getElementById('message');


 let isValid = false;
 let passwordsMatch = false;

function validateForm() {
//Using Constraint API
isValid = form.checkValidity();
//Style main message for an error
if (!isValid) {
  message.textContent = 'Please fill out all fields';
  message.style.color = 'red';
  return;
}
//Check to see if passwords match
if (password1El.value === password2El.value) {
  passwordsMatch = true;
  password1El.style.borderColor = 'green';
  password2El.style.borderColor = 'green';
} else {
  passwordsMatch = false;
  message.textContent = 'Make sure passwords match';
  message.style.color = 'red';
  password1El.style.borderColor = 'red';
  password2El.style.borderColor = 'red';
  return;
}
//If form is valid and paswords match
if (isValid && passwordsMatch) {
message.textContent = 'Successfully Registered!';
message.style.color = 'green';
}
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    password: form.password.value
  };
  //Something useful doing with userData: sending to server z.B.
  console.log(user);
}

 function processFormData(e) {
   e.preventDefault();
  //Validate Form
  validateForm();
  //Submit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
 }

 //Event Listener

 form.addEventListener('submit', processFormData);