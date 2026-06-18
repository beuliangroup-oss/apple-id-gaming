const registerModal =
document.getElementById("registerModal");

document
.getElementById("openRegister")
.onclick = function(e){

e.preventDefault();

registerModal.style.display="flex";

};

document
.getElementById("closeRegister")
.onclick = function(){

registerModal.style.display="none";

};

window.onclick = function(e){

if(e.target===registerModal){

registerModal.style.display="none";

}

};

const password =
document.getElementById("password");

const toggle =
document.getElementById("togglePassword");

toggle.onclick = function(){

if(password.type==="password"){

password.type="text";
toggle.innerHTML="🙈";

}else{

password.type="password";
toggle.innerHTML="👁";

}

};
