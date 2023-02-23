/* Header button */

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

var coll = document.getElementsByClassName("hamburger-menu");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


/* Contact Submit button shake */
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
    myButton.classList.add("contact-submit-button-active");
    setTimeout(function () {
        myButton.classList.remove("contact-submit-button-active");
    }, 500);
});