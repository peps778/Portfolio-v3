document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.getElementById("navbar-default");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Select all sections
  const navLinks = document.querySelectorAll("nav ul li a"); // Select all nav links

  function updateActiveLink() {
    let scrollPos = window.scrollY + 100; // Adjust to detect section correctly

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("bg-blue-700", "text-white", "lg:text-blue-700"); // Remove all active styles
          link.removeAttribute("aria-current"); // Remove aria-current
        });

        // Highlight the active section link
        let activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("text-white", "bg-blue-700", "lg:text-blue-700"); // Apply text color for lg+
          activeLink.setAttribute("aria-current", "page"); // Set aria-current
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
});

  