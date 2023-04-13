// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Get the image element and set up a click event listener to toggle a class on it
    var image = document.querySelector("img");
    image.addEventListener("click", function() {
      image.classList.toggle("enlarged");
    });
  
    // Get the unordered list elements and set up a click event listener to toggle a class on them
    var lists = document.querySelectorAll("ul");
    lists.forEach(function(list) {
      list.addEventListener("click", function() {
        list.classList.toggle("collapsed");
      });
    });
  
  });
  