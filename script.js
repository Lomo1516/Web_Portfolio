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