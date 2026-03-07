// Typewriter effect
const typewriterEl = document.getElementById('typewriter');
const subtitleEl = document.getElementById('typewriter-subtitle');
const typewriterText = 'Kevin Hinojo';
const subtitleText = 'Information Technology Student';
let charIndex = 0;

function type() {
  if (charIndex < typewriterText.length) {
    typewriterEl.textContent += typewriterText[charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    typewriterEl.classList.add('done');
    setTimeout(typeSubtitle, 400);
  }
}

let subIndex = 0;
function typeSubtitle() {
  if (subIndex < subtitleText.length) {
    subtitleEl.textContent += subtitleText[subIndex];
    subIndex++;
    setTimeout(typeSubtitle, 70);
  } else {
    subtitleEl.classList.add('glow');
    setTimeout(() => {
      document.getElementById('btn-group').classList.add('fade-up');
    }, 600);
    setTimeout(() => {
      document.getElementById('socials').classList.add('fade-up');
    }, 1000);
    setTimeout(() => {
      document.getElementById('scroll-down-arrow').classList.add('fade-up');
    }, 1500);
  }
}

setTimeout(type, 500);

// Hamburger menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuIcon.classList.toggle('open');
  if (menuIcon.classList.contains('open')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuIcon.classList.remove('open');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  });
});

// Floating background icons
const icons = [
  'fa-code', 'fa-database', 'fa-server', 'fa-laptop-code',
  'fa-shield-halved', 'fa-network-wired', 'fa-microchip',
  'fa-terminal', 'fa-cloud', 'fa-bug', 'fa-code-branch',
  'fa-circle-nodes', 'fa-gears', 'fa-folder-open', 'fa-apple',
  'fa-lock', 'fa-wifi', 'fa-desktop', 'fa-hard-drive', 'fa-sitemap'
];

const container = document.getElementById('floatingIcons');

for (let i = 0; i < 30; i++) {
  const el = document.createElement('i');
  el.className = `fa-solid ${icons[Math.floor(Math.random() * icons.length)]} float-icon`;
  const size  = Math.random() * 18 + 12;
  const left  = Math.random() * 100;
  const top   = Math.random() * 100;
  const dur   = Math.random() * 12 + 8;
  const delay = Math.random() * -20;
  el.style.cssText = `font-size:${size}px; left:${left}%; top:${top}%; animation-duration:${dur}s; animation-delay:${delay}s;`;
  container.appendChild(el);
}

// Scroll reveal
const revealItems = document.querySelectorAll('.reveal, .reveal-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));

// EmailJS
emailjs.init("NEQxr2JilplQXKgew");

const contactForm = document.getElementById('contact-form');
const sendBtn = document.getElementById('send-btn');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  sendBtn.textContent = 'SENDING...';
  sendBtn.disabled = true;

  emailjs.sendForm('service_skhearq', 'template_esy9vzx', contactForm)
    .then(() => {
      formStatus.textContent = '✅ Message sent successfully!';
      formStatus.style.color = '#D4AF37';
      contactForm.reset();
      sendBtn.textContent = 'SEND MESSAGE';
      sendBtn.disabled = false;
    })
    .catch(() => {
      formStatus.textContent = '❌ Something went wrong. Please try again.';
      formStatus.style.color = '#ff4d4d';
      sendBtn.textContent = 'SEND MESSAGE';
      sendBtn.disabled = false;
    });
});