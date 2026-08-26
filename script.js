const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 18);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  const label = toggle.querySelector(".sr-only");
  if (label) label.textContent = open ? "Close navigation" : "Open navigation";
  nav?.classList.toggle("open", open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false");
    const label = toggle?.querySelector(".sr-only");
    if (label) label.textContent = "Open navigation";
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

const bookingUrl = String(window.RYUJINTE_BOOKING_URL || "").trim();
if (/^https:\/\//i.test(bookingUrl)) {
  document.querySelectorAll("[data-booking-link]").forEach((link) => {
    link.href = bookingUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
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

document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
