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


// anti inspect 

document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.addEventListener("keydown", (event) => {
        if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
            event.preventDefault();
        }
    });



// send email

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  sendEmail();
});

function sendEmail() {
  let name = document.getElementById("nameField").value;
  let email = document.getElementById("emailField").value;
  let message = document.getElementById("subjectField").value;

  if (!name || !email || !message) {
      alert("Please fill out all fields!");
      return;
  }

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "work.paulmagbanua@gmail.com",
    Password: "CFBED23B17EBA67DD7CE9B3DB14BF68E9EEA",  
    To: "work.paulmagbanua@gmail.com",
    From: "work.paulmagbanua@gmail.com", 
      Subject: "New Contact Form Submission",
      Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
  }).then(response => {
      alert("Message Sent Successfully!");
      document.getElementById("contactForm").reset(); // Clear the form
  }).catch(error => {
      alert("Error sending email: " + error);
  });
}





  