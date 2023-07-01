const signUp = document.getElementById('submit');
const home = document.getElementById('home');

//Taking Input from the User and Storing the data with localStorage
window.onload = function storingData(){
    if(localStorage){
        signUp.addEventListener('click',()=>{ 
            console.log("Signup Button is Clicked");//To Check the Signup button
            const fname = document.getElementById("fname").value.trim();
            const lname = document.getElementById("lname").value.trim();
            const email = document.getElementById("email").value.trim();
            const pass = document.getElementById("password").value.trim();
            const cpass = document.getElementById("cpassword").value.trim();           
            localStorage.setItem('users', JSON.stringify({"fname":fname,"lname":lname,"email":email,"pass":pass,"cpass":cpass}));
        })
    }}

//Setting the variables for the items
const fname = JSON.parse(localStorage.getItem('users')).fname;
const lname = JSON.parse(localStorage.getItem('users')).lname;
const email = JSON.parse(localStorage.getItem('users')).email;


signUp.addEventListener('click',function(){
    console.log("Final Submit is Clicked");
    const pass = JSON.parse(localStorage.getItem('users')).pass;
    const cpass = JSON.parse(localStorage.getItem('users')).cpass;
    if(pass != cpass){
        alert("Please makesure password and Confirm pass as same")
    }
    else{
        window.location.href="../Login";
        alert("Sign up successful, Please go to Login Section")
    }
})




