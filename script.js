function handleHamburgerTabAccessibility() {
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenuCheckbox = document.getElementById("mobile-menu");

    hamburger.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        mobileMenuCheckbox.checked = !mobileMenuCheckbox.checked;
      }
    });
  });
}

handleHamburgerTabAccessibility();
