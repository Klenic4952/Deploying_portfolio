import { useState, useEffect } from "react";


const UseActiveSection = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust this value to determine when a section is considered "active"
    });

    const sections = document.querySelectorAll("main section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};

export default UseActiveSection;