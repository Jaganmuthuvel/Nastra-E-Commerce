let cancel=document.getElementById("cancel")
let banner=document.getElementById("banner")
cancel.addEventListener("click",function(){
    cancel.parentElement.remove()
})

let menu=document.getElementById("menu")
let sidenavbar=document.getElementById("sidenavbar")
let cancel1=document.getElementById("cancel1")
menu.addEventListener("click",function(){
    sidenavbar.style.right="60%"
})
cancel1.addEventListener("click",function(){
    sidenavbar.style.right="100%"
})

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const cards = document.querySelectorAll("[data-tags]");

  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const selectedTags = Array.from(checkboxes)
        .filter(c => c.checked)
        .map(c => c.value.toLowerCase());

      cards.forEach(card => {
        const cardTags = card.getAttribute("data-tags").toLowerCase().split(',');
        const show = selectedTags.length === 0 || selectedTags.some(tag => cardTags.includes(tag));
        card.classList.toggle("hidden", !show);
      });
    });
  });
});

  

