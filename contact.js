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