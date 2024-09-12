/*
let bttButton = document.getElementById("bkToTop");

window.onscroll = function () {scrollfunction()};

function scrollfunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                bttButton.style.display = "block";
        } else {
                bttButton.style.display = "none";
        }
}

function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}
*/

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

