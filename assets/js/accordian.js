// Array with all the accordions
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
     accordions[i].onclick = function () {
          this.classList.toggle("is-open");
          var content = this.nextElementSibling;

          if (content.style.maxHeight) {
               // accordion is open, we need to close it
               content.style.maxHeight = null
          } else {
               // accordion is closed
               //scrollHeight grabs the size of the content in the accordion
               content.style.maxHeight = content.scrollHeight + "px";
          }
     }
}