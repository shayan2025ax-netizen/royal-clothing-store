document.addEventListener("DOMContentLoaded", function () {

  console.log("Royal Clothing Store loaded successfully!");

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Button clicked:", button.textContent);
    });
  });

});
