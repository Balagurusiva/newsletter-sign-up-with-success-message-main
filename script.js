
const form = document.querySelector('form');
const mainPage = document.querySelector('.sign-up')
const successPage = document.querySelector('.success')
const errMsg = document.querySelector('.errMsg')
const email = document.querySelector('input')
 
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = ()=>{
  if(email.value.match(mailRegex)){
    mainPage.setAttribute("style","display:none")
    successPage.setAttribute("style","display:normal")
  }else if(email.value == ""){
     errMsg.innerText="valid emailId required";
     email.setAttribute("style","border:1px solid red;background-color:hsla(4, 100%, 67%, 0.1);color:hsl(4, 100%, 67%)")
  }else{
    errMsg.innerHTML="valid emailId required";
     email.setAttribute("style","border:1px solid red;background-color:hsla(4, 100%, 67%, 0.1)")
  }
}