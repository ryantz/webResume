// back top top button

let bttBtn = document.getElementById("bkToTop");

window.onscroll = () => {scrollfunction()};

function scrollfunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                bttBtn.style.display = "block"
        } else {
                bttBtn.style.display = "none"
        }
}

bttBtn.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: "smooth"});
});

// submit button

let subBtn = document.getElementById("submit");

subBtn.addEventListener("click", () => {
        window.alert("Thank you for submitting!");
});


