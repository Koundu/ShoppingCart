const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
const save = document.getElementById('submit');
const logout = document.getElementById('logout');

save.addEventListener('click',function(){
var res1=JSON.parse(localStorage.getItem('users')).fname; //Updating the first name with the firstname of the save info
var res2=JSON.parse(localStorage.getItem('users')).lname; //Updating the last name with the lastname of the save info

alert("Information is Update \n The First Name is " + fname + "and Last Name is " + lname)
})


logout.addEventListener('click',function(){
    alert("Thankyou for Shopping Withus")
    window.location.href="./"
})