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
      const images = [
        "url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg')",
        "url('https://t4.ftcdn.net/jpg/06/34/09/69/360_F_634096945_nT013AXOaokOmXXU0mRlfSLmnSbbmZXw.jpg')",

        "url('https://m.media-amazon.com/images/I/81wM67ZuKTL._UF1000,1000_QL80_.jpg')"
      ];

      let current = 0;
      const section = document.getElementById("heroSection");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");

      function showImage(index) {
        section.style.backgroundImage = images[index];
      }

      prevBtn.addEventListener("click", function () {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
      });

      nextBtn.addEventListener("click", function () {
        current = (current + 1) % images.length;
        showImage(current);
      });

      // Show initial image
      showImage(current);
    });
