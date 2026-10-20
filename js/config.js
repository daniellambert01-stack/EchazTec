/*
 * Site configuration. Every element with data-link="..." is resolved from
 * LINKS, so each external address only needs changing here. A value of ""
 * falls back to the contact page.
 */
window.ECHAZ_CONFIG = {
  brand: "EchazTec",
  product: "SpeakUp",
  email: "daniel.lambert01@gmail.com",

  // Where Sprach-Roadmap answers are sent automatically (FormSubmit or Formspree).
  // Leave "" until approved: visitors then use the "send by email" button.
  formEndpoint: "",

  LINKS: {
    // Free 30-minute discovery call (Calendly, Microsoft Bookings, ...)
    discovery: "",
    linkedin: "https://www.linkedin.com/in/daniel-p-lambert-8b853037"
  }
};
