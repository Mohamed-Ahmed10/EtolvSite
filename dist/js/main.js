let showBtn = document.querySelector("#show_btn"),
    contactsSmall = document.querySelector("#contacts_small");

showBtn.onclick = function () {
    contactsSmall.classList.toggle("show");
    this.children[0].classList.toggle("rotate");
};
