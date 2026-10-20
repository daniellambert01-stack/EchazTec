/*
 * Site configuration. Every element with data-link="..." is resolved from
 * LINKS, so each external address only needs changing here. A value of ""
 * falls back to the contact page.
 */
window.ECHAZ_CONFIG = {
  brand: "EchazTec",
  product: "SpeakUp",
  email: "daniel.lambert01@gmail.com",

  // Sprach-Roadmap answers are delivered to this Gmail inbox via FormSubmit.
  // The first submission sends a one-time activation email that must be confirmed.
  formEndpoint: "https://formsubmit.co/ajax/daniel.lambert01@gmail.com",

  LINKS: {
    // Free 30-minute discovery call (Calendly, Microsoft Bookings, ...)
    discovery: "",
    linkedin: "https://www.linkedin.com/in/daniel-p-lambert-8b853037"
  },

  // Rates for the plan calculator (EUR). Session prices are the school's price
  // list; the support and platform fees come from the SpeakUp concept deck.
  PRICING: {
    groupBase: 55,        // group session of 45 min: first person
    groupPerExtra: 7.5,   // each additional person in the group session
    oneToOne: 60,         // 1:1 session of 45 min
    oneToOneExec: 65,     // executive 1:1 session of 45 min
    aiLicence: 30,        // AI coach licence per person per month
    evaluation: 220,      // monthly trainer evaluation (cockpit)
    checkIns: 110,        // check-ins in M1, M3 and M6, spread per month
    kickoff: 440,         // one-time: kick-off & user training (only charged when the AI coach is used)
    setup: 2000,          // one-time: setting up the AI platform for a company
    setupFrom: 5,         // the set-up fee applies from this many AI licences (company plans)
    travel: 0             // per on-site session (in person / hybrid); 0 = by arrangement
  }
};
