(function (){
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
    const navBar = document.getElementById("nav-bar");
    if(navBar.classList.contains("hide")) {
        navBar.classList.remove("hide");
    }else{
        navBar.classList.add("hide");
    }
});

}());