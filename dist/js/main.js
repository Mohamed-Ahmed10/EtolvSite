// let showBtn = document.querySelector("#show_btn"),
//   contactsSmall = document.querySelector("#contacts_list");
// showBtn.onclick = function () {
//   contactsSmall.classList.toggle("show"),
//     this.children[0].classList.toggle("rotate");
// };
let loaderContainer = document.getElementById('loader_container');
console.log(loaderContainer);


// window.addEventListener('load', function(event) {
//     loaderContainer.remove();
//     console.log(loaderContainer)
// });

function loaderFunction ()
{
  loaderContainer.className = "remove";
}

setTimeout(loaderFunction , 2950)