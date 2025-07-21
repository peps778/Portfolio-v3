import { useState, useRef, useEffect } from "react";

// Images
import nc3Award from "../assets/images/programmer-of-the-year.jpg";
import webDesignCert from "../assets/images/web-design-cert.jpg";
import sqlCert from "../assets/images/sql-cert.jpg";
import htmlCert from "../assets/images/html-cert.jpg";

const certificates = [
  { img: nc3Award, alt: "NC III Award" },
  { img: webDesignCert, alt: "Web Design Certificate" },
  { img: sqlCert, alt: "SQL Certificate" },
  { img: htmlCert, alt: "HTML Certificate" },
];

function EducationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateSlide = (index) => {
    const nextIndex = (index + certificates.length) % certificates.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section id="fourthSection" className="bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-3xl lg:text-4xl font-bold italic text-white">Education</h1>
          <hr className="w-24 h-[2px] bg-white mx-auto mt-2 rounded" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Education Info */}
          <div className="text-white text-lg">
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-graduation-cap text-blue-400 mr-2 mt-1"></i>
                Ramon Torres Louisiana National High School
              </li>
              <li className="flex items-start">
                <i className="fas fa-graduation-cap text-blue-400 mr-2 mt-1"></i>
                i-Tech Computer Education Bago City Inc.
              </li>
              <p className="mt-4 font-semibold text-white">Another Qualification:</p>
              <li className="flex items-start">
                <i className="fas fa-file-alt text-green-400 mr-2 mt-1"></i>
                Graduate of NC III in Computer Programming
              </li>
            </ul>
            <p className="mt-6 text-base lg:text-lg">
              I am a multi-skilled and certified professional with diverse local education and online
              training, ensuring my competence in various fields.
            </p>
          </div>

          {/* Right: Certificate Carousel */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-lg shadow-lg max-w-3xl mx-auto">
              <div
                ref={trackRef}
                className="flex transition-transform duration-500 ease-in-out"
                onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
                onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
                onTouchEnd={() => {
                  const delta = touchEndX.current - touchStartX.current;
                  if (delta > 50) updateSlide(currentIndex - 1);
                  else if (delta < -50) updateSlide(currentIndex + 1);
                }}
              >
                {certificates.map((cert, index) => (
                  <div key={index} className="flex-shrink-0 w-full aspect-[16/9]">
                    <img
                      src={cert.img}
                      alt={cert.alt}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Prev Button */}
              <button
                aria-label="Previous"
                onClick={() => updateSlide(currentIndex - 1)}
                className="absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                aria-label="Next"
                onClick={() => updateSlide(currentIndex + 1)}
                className="absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
