const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 18);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  nav?.classList.toggle("open", open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("open");
  });
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const phone = String(window.RYUJINTE_PHONE || "").trim();
if (phone) {
  const dialable = phone.replace(/[^+\d]/g, "");
  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    link.textContent = phone;
    link.href = `tel:${dialable}`;
    link.hidden = false;
  });
}

document.querySelectorAll("[data-gallery-image]").forEach((image) => {
  image.addEventListener("error", () => image.closest("figure")?.remove());
});

const portraitImage = document.querySelector("[data-portrait-image]");
portraitImage?.addEventListener("error", () => {
  document.querySelector("[data-portrait]")?.remove();
  document.querySelector("[data-instructor-grid]")?.classList.add("no-portrait");
});

const videoSlot = document.querySelector("[data-video-slot]");
const videoSection = document.querySelector("[data-video-section]");
const videoId = String(window.RYUJINTE_VIDEO_ID || "").trim();
if (videoSlot && /^[A-Za-z0-9_-]{6,20}$/.test(videoId)) {
  const frame = document.createElement("iframe");
  frame.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
  frame.title = "Ryujin-te karate demonstration";
  frame.loading = "lazy";
  frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  frame.allowFullscreen = true;
  videoSlot.replaceChildren(frame);
  videoSection.hidden = false;
}

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px" });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}
