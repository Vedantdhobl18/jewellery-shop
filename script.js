let header = document.querySelector('.header-main');
let navbar = document.querySelector('.navbar');
let modal = document.getElementById("modal");

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    if (!isModalOpen()){
        if(window.scrollY > 120){
            header.classList.add('active');
        } else{
            header.classList.remove('active');
            navbar.classList.remove('active');

        }
    }
}

setTimeout(() =>{
    showModal();
}, 5000);

function showModal(){
    modal.style.display = "block";
    header.classList.remove('active');
}

function closeModal(){
    modal.style.display = "none";
}

function isModalOpen(){
    return modal.style.display === "block";
}

//login and singup //

const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

