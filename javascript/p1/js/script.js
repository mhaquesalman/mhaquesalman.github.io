
// define ui elements
let form = document.querySelector('form');
let text = document.querySelector('#text_field')
let options = document.getElementsByName("radios");
let reloadBtn = document.getElementById("reload_btn");


// define vairables & regular expressions
let selectOption = "";
let inputText = "";
let postCodeRE = /^([0-9]){4}$/;
let phoneRE = /^(\+)?(88)?01[0-9]{9}$/;
let emailRE = /^([a-zA-Z0-9]\.?_?-?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.][^(-_)]$/;
let nidRE = /^([0-9]){10}([0-9]{3})?$/
let pswrdRE = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
let cvvRE = /^([0-9]{3,4})$/

form.addEventListener('submit', checkInput);

reloadBtn.addEventListener('click', (e) => {
    window.location.reload();
})

/* let str2 = "41234567868965"
let str = "bohubrihilearn@edu.com.bd";
// console.log(emailRE.test(str))
str = "26466";
str = "abcdef2!"
str = '122'
console.log(cvv.test(str)) */


function checkInput(e) {
    if (text.value === '') {
       console.log("empty");
    //    showMessage("Empty field", "alert alert-danger");
    if (document.querySelector('.alert') != null) document.querySelector('.alert').remove();
    showAlert("Empty Field", "alert alert-warning");
    } else {
        inputText = text.value;
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                // console.log("value: " + options[i].value);
                selectOption = options[i].value
                switch (selectOption) {
                    case "Email": validateInput("Email", 'Invalid email address');
                    break;
                    case "Phone": validateInput("Phone", 'Invalid phone number, it must contains 11 digits');
                    break;
                    case "PostCode": validateInput("PostCode", 'Invalid postal code, it must contains 4 digits');
                    break;
                    case "Nid": validateInput("Nid", 'Invalid NID, it must contains 10 or 13 digits');
                    break;
                    case "Cvv": validateInput("Cvv", 'Invalid CVV, it must contains 3 or 4 digits');
                    break;
                    case "Password": validateInput("Password", 'Invalid password, it must contains minimum 8 characters, at least 1 letter, 1 number & 1 speical character');
                    break;
                    default: validateInput("", "");
                    break;
                }
            }
        }
    }
    
    e.preventDefault();
   
}


function validateInput(input, errMsg) {
    if (document.querySelector('.alert') != null) document.querySelector('.alert').remove();
    if (input === "Email" && emailRE.test(inputText)) {
        console.log("correct email");
        // showMessage(`Valid ${input}`, "alert alert-success")
        showAlert(`Valid ${input}`, "alert alert-success");
    } else if (input === "Phone" && phoneRE.test(inputText)) {
        console.log("correct phone");
        // showMessage(`Valid ${input}`, "alert alert-success");
        showAlert(`Valid ${input}`, "alert alert-success");
    } else if (input === "PostCode" && postCodeRE.test(inputText)){
        console.log("correct postal");
        // showMessage(`Valid ${input}`, "alert alert-success");
        showAlert('Valid Postal Code', "alert alert-success");
    } else if (input === "Nid" && nidRE.test(inputText)) {
        showAlert('Valid NID', 'alert alert-success');
    } else if (input === "Cvv" && cvvRE.test(inputText)) {
        showAlert('Valid CVV', 'alert alert-success');
    } else if (input === "Password" && pswrdRE.test(inputText)) {
        showAlert('Valid Password', 'alert alert-success');
    } else {
        console.log(`Wrong ${input}`);
        // showMessage(`Invalid ${input}`, "alert alert-danger");
        showAlert(errMsg, "alert alert-danger");
    }


}


function showMessage(message, className) {
    let div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    document.querySelector('.mainContainer').insertBefore(div, form);


    setTimeout(() => {
        document.querySelector('.alert').remove();
        text.value = '';
    }, 3000);

}


function showAlert(message, className) {
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="${className} alert-dismissible fade show" role="alert">
     <strong> ${message} </strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
   `;
   document.querySelector('.mainContainer').insertBefore(div, form);
}
