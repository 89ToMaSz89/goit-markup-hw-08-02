(() => {
    const refs = {
      openModalBtn: document.querySelector("[mobile-menu-open]"),
      closeModalBtn: document.querySelector("[mobile-menu-close]"),
      modal: document.querySelector("[mobile-navigation]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();


// function myFunction() {
//   var x = document.getElementById("mobile-navigation");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }