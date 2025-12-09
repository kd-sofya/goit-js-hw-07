const form = document.querySelector(".login-form");

form.addEventListener("submit", functionForm);

function functionForm(eve) {
    eve.preventDefault()
    // console.log(eve);

      
const inputs = form.querySelectorAll('input');

for (const input of inputs) {
    if (!input.value.trim()) {
        alert('All form fields must be filled in');
        return;
    }
}
    
    const formValue = eve.target;

    const email = formValue.elements.email.value;
    const password = formValue.elements.password.value;

    console.log({ email, password });
    // console.log(password);
    
    form.reset();
}

