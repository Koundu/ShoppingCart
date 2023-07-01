const email = JSON.parse(localStorage.getItem('users')).email;
const pass = JSON.parse(localStorage.getItem('users')).pass;
const fname = JSON.parse(localStorage.getItem('users')).fname;
const lname = JSON.parse(localStorage.getItem('users')).lname;

const button = document.getElementById('submit')

button.addEventListener('click',function(){
        const inemail = document.getElementById('email').value;
        const inpass = document.getElementById('pass').value;
       if((inemail === email) & (pass === inpass) ){
            alert("Login Successfull.\nWelcome " + fname + " " + lname);
            window.location.replace("../");
       }
       else{
        alert("Please Enter correct EMail ID and Password")
       }
})

console.log(email,pass);

