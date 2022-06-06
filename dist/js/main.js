let showBtn = document.querySelector("#show_btn"),
    contactsSmall = document.querySelector("#contacts_list");

showBtn.onclick = function () {
    contactsSmall.classList.toggle("show");
    this.children[0].classList.toggle("rotate");
};

$("body").niceScroll({
    cursorcolor: "#D43636",
    cursorwidth: "15px",
    background: "#CCC",
});
