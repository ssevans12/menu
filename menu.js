(function (){
const button = document.getElementsByTagName("button")[0];
const navBar = document.getElementById("nav-bar");
button.addEventListener("click", () => {
    if(navBar.classList.contains("hide")) {
        navBar.classList.remove("hide");
    }else{
        navBar.classList.add("hide");
    }
});
function hideLetterNumber (event) {
    event.preventDefault();
    const letters = document.getElementById("letters-two");
    const numbers = document.getElementById("numbers-two");

    if (event.target.id === "numbers"){
        numbers.classList.remove ("show");
        letters.classList.remove ("hide");
        numbers.classList.add("hide");
        letters.classList.add("show");
        
    } else {
        numbers.classList.remove("hide");
        letters.classList.remove("show");
        numbers.classList.add("show");
        letters.classList.add("hide");
    }
    navBar.classList.add("hide");
}

let ps = document.getElementsByTagName("a");
for(let i = 0; i < ps.length; i++){
    let element = ps[i];
    element.addEventListener("click", hideLetterNumber);
};

}());