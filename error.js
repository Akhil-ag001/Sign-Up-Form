const pass_correct = document.getElementById("user_password");
const pass_check = document.getElementById("confirm_password");
const error_msg = document.getElementById("error-msg");

const error = "Passwords do not match";

pass_check.addEventListener("input", ()=>{
    if(pass_correct.value != pass_check.value){
        displayError();
        pass_check.setCustomValidity("Wrong password");
    }
    else{
        removeError();
        pass_check.setCustomValidity("");
    }
})

function displayError(){
    error_msg.textContent = error;
}

function removeError(){
    error_msg.textContent = "";
}
