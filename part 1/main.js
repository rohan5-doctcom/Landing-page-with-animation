const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
ScrollReveal().reveal(".home-img img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".home-content h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".home-content h3", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".home-content p", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".home-content .btn2", {
    ...scrollRevealOption,
    delay: 1500,
  });