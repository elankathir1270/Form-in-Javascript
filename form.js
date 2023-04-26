const form = document.querySelector("#form");
const user = document.querySelector("#user");
const email = document.querySelector("#email");
const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");

form.addEventListener("submit", (e) => {
   
    if(!validateinputs()) {
        e.preventDefault();
       
    }
    else{
        alertMsg();
    }
   
})

function alertMsg() {
    alert("Registered successfully");
}


function validateinputs() {

const userVal = user.value.trim();
const emailVal = email.value.trim();  
const pass1Val = pass1.value.trim(); 
const pass2Val = pass2.value.trim(); 
let success = true;


if(userVal === '') {
    success = false;
    setError(user,"Username is requirerd")
}
else{
    setSuccess(user)
}

if(emailVal === ''){
    success = false;
    setError(email, "E-mail Id is required")
}
else if(!validateEmail(emailVal)) {
    success = false;
    setError(email,"Enter vaild Mail Id")
}
else{
    setSuccess(email)
}

if(pass1Val === '') {
    success = false;
    setError(pass1, "Please enter password")
}
else if(pass1Val.length < 8) {
    success = false;
    setError(pass1, "Password should be alteast 8 characters")
}
else{
    setSuccess(pass1)
}

if(pass2Val === '') {
    success = false;
    setError(pass2, "Please confirm password")
}
else if(pass2Val !== pass1Val) {
    success = false;
    setError(pass2, "Password dose not match")
}
else{
    setSuccess(pass2)
}

return success;

}

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error")
 
    errorElement.innerText = message;
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")

}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error")

    errorElement.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");


}

function validateEmail(email) {
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}