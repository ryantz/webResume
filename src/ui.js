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
