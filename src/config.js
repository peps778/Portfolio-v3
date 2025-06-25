
// nav bar events 
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const menu = document.getElementById("navbar-default");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function updateActiveLink() {
    let scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("text-blue-700");
          link.removeAttribute("aria-current");
        });

        const activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("text-blue-700");
          activeLink.setAttribute("aria-current", "page");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
});

// Prevent form from refreshing the page and send email



document.addEventListener("DOMContentLoaded", () => {
  // card-rendering

   // render the cards into the page 
 const cards = [
  {
    img: "./src/assets/web-development-icon.png",
    alt: "Web Development Icon",
    title: "Web Developer",
    description: "Building responsive, dynamic websites with clean code and innovative design, turning ideas into seamless digital experiences."
  },
  {
    img: "./src/assets/marketing-specialist-icon.png",
    alt: "Marketing Specialist Icon",
    title: "Marketing Specialist",
    description: "Creating strategic campaigns that drive engagement, boost conversions, and deliver measurable results."
  },
  {
    img: "./src/assets/FB-ads-manager-icon.png",
    alt: "FB Ads Manager Icon",
    title: "FB Ads Manager",
    description: "Optimizing Facebook advertising to maximize reach, generate leads, and grow brand visibility with precision targeting."
  },
  {
    img: "./src/assets/crm-manager-icon.png",
    alt: "CRM Manager Icon",
    title: "CRM Manager",
    description: "Streamlining customer relationships through effective CRM strategies, ensuring smooth communication and long-term client retention."
  },
  {
    img: "./src/assets/automation-icon.png",
    alt: "Automation Expert Icon",
    title: "Automation Expert",
    description: "Developing efficient workflows and systems to reduce manual tasks, increase productivity, and ensure seamless operations. (GHL/Make/Zapier)"
  },
  {
    img: "./src/assets/UI-UX-design-icon.png",
    alt: "UI/UX Design Icon",
    title: "UI/UX Designer",
    description: "Designing intuitive and engaging interfaces that enhance user satisfaction and deliver exceptional digital journeys."
  }
];

const container = document.getElementById("card-container");

cards.forEach((card, index) => {
  const li = document.createElement("li");
  li.className = `flex justify-center bg-slate-50 rounded-lg shadow-xl p-4 max-sm:md-10 md:mx-10 lg:mx-4 pt-10 ${index === cards.length - 1 ? 'max-sm:mb-10' : ''}`;

  li.innerHTML = `
    <div class="text-center">
      <img src="${card.img}" alt="${card.alt}" class="mx-auto w-16 md:w-24 lg:w-28">
      <h1 class="text-2xl md:text-3xl lg:text-2xl font-bold italic my-2 inline-block px-2 rounded text-slate-800">
        ${card.title}
      </h1>
      <p class="text-sm md:text-lg lg:text-1xl text-gray-600 mt-2 inline-block px-2 rounded">
        ${card.description}
      </p>
    </div>
  `;

  container.appendChild(li);


});



});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// certs 

 document.addEventListener('DOMContentLoaded', function () {
  const certificates = [
    { img: "./src/assets/web-design-cert.jpg", alt: "Web Design Certificate" },
    { img: "./src/assets/css-cert.jpg", alt: "CSS Certificate" },
    { img: "./src/assets/sql-cert.jpg", alt: "SQL Certificate" },
    { img: "./src/assets/html-cert.jpg", alt: "HTML Certificate" }
  ];

  const container = document.getElementById('carousel-container');
  let currentIndex = 0;

  // Wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'relative overflow-hidden rounded-lg shadow-lg w-full max-w-3xl mx-auto';

  // Track
  const track = document.createElement('div');
  track.className = 'flex transition-transform duration-500 ease-in-out';
  track.id = 'carousel-track';

  // Slides
  certificates.forEach(cert => {
    const slide = document.createElement('div');
    slide.className = 'flex-shrink-0 w-full aspect-[16/9]';
    
    const img = document.createElement('img');
    img.src = cert.img;
    img.alt = cert.alt;
    img.className = 'w-full h-full object-cover';

    slide.appendChild(img);
    track.appendChild(slide);
  });

  // Buttons
  const prevBtn = document.createElement('button');
  prevBtn.innerHTML = `
    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>`;
  prevBtn.className = 'absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full';
  
  const nextBtn = document.createElement('button');
  nextBtn.innerHTML = `
    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>`;
  nextBtn.className = 'absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full';

  // Append
  wrapper.appendChild(track);
  wrapper.appendChild(prevBtn);
  wrapper.appendChild(nextBtn);
  container.appendChild(wrapper);

  // Update function
  const updateSlide = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    updateSlide();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % certificates.length;
    updateSlide();
  });

  // Swipe support
  let startX = 0;
  let endX = 0;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  track.addEventListener('touchend', () => {
    const delta = endX - startX;
    if (delta > 50) {
      currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    } else if (delta < -50) {
      currentIndex = (currentIndex + 1) % certificates.length;
    }
    updateSlide();
    startX = 0;
    endX = 0;
  });
});
