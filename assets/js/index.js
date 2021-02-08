// About Me Modal ////////////////////////////////////////////////////
const aboutMeButton = document.querySelector("#about-me");
const modalBackground = document.querySelector(".about-background");
const aboutModal = document.querySelector(".about-me");

aboutMeButton.addEventListener("click", () => {
    aboutModal.classList.add("is-active");
});
modalBackground.addEventListener("click", () => {
    aboutModal.classList.remove("is-active");
});

// My Skills modal ////////////////////////////////////////////////////
const skillsButton = document.querySelector("#my-skills");
const skillsBackground = document.querySelector(".skills-background");
const skillsModal = document.querySelector(".my-skills");

skillsButton.addEventListener("click", () => {
    skillsModal.classList.add("is-active");
});
skillsBackground.addEventListener("click", () => {
    skillsModal.classList.remove("is-active");
});

// Education Modal ////////////////////////////////////////////////////
const educationButton = document.querySelector("#education");
const educationBackground = document.querySelector(".education-background");
const educationModal = document.querySelector(".education");

educationButton.addEventListener("click", () => {
    educationModal.classList.add("is-active");
});
educationBackground.addEventListener("click", () => {
    educationModal.classList.remove("is-active");
});

// Projects Modal ////////////////////////////////////////////////////
const projectsButton = document.querySelector("#projects");
const projectsBackground = document.querySelector(".projects-background");
const projectsModal = document.querySelector(".projects");

projectsButton.addEventListener("click", () => {
    projectsModal.classList.add("is-active");
});
projectsBackground.addEventListener("click", () => {
    projectsModal.classList.remove("is-active");
});

// Contact Modal /////////////////////////////////////////////////////
const contactButton = document.querySelector("#contact");
const contactBackground = document.querySelector(".contact-background");
const contactModal = document.querySelector(".contact");

contactButton.addEventListener("click", () => {
    contactModal.classList.add("is-active");
});
contactBackground.addEventListener("click", () => {
    contactModal.classList.remove("is-active");
});

// Resume Modal /////////////////////////////////////////////////////
const resumeButton = document.querySelector("#resume");
const resumeBackground = document.querySelector(".resume-background");
const resumeModal = document.querySelector(".resume");

resumeButton.addEventListener("click", () => {
    resumeModal.classList.add("is-active");
});
resumeBackground.addEventListener("click", () => {
    resumeModal.classList.remove("is-active");
});