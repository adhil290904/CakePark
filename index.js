var stickybar = document.querySelector('.container2');

window.addEventListener('scroll', myFunction);

function myFunction(){
    if (window.scrollY>30){
        stickybar.style["top"] = 0;
    }else{
        stickybar.style["top"] = "50px";
    }
}


function Mysignup(){
    document.querySelector('.signup').classList.toggle('lch');
    document.querySelector('.login').classList.remove('lch');
}

function Mylogin(){
    document.querySelector('.login').classList.toggle('lch');
    document.querySelector('.signup').classList.remove('lch');
}

//responsive web design.

function openNav() {
    document.getElementById("mySidenav").style.height = "27rem";
    document.getElementById("mySidenav").style.padding = "60px";
    document.getElementById("exit").style.display ="block";
    document.getElementById("bar").style.display ="none";

  }

function closeNav() {
    document.getElementById("mySidenav").style.height = "0rem";
    document.getElementById("mySidenav").style.padding = "0px";
    document.getElementById("exit").style.display ="none";
    document.getElementById("bar").style.display ="block";
}
