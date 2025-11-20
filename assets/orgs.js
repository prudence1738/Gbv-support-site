// Lightweight renderer for organisations. Data kept minimal and safe.
const orgContainer = document.getElementById('orgs');

fetch('orgs.json').then(r => r.json()).then(data => {
  const list = data.organisations;
  list.forEach(org => {
    const el = document.createElement('div'); el.className='org';
    el.innerHTML = `
      <h3>${org.name}</h3>
      <p>${org.summary}</p>
      <p><strong>Contact:</strong> ${org.contact || 'See website'}</p>
      <p><a href="${org.website}" target="_blank" rel="noopener noreferrer">Visit website</a></p>
    `;
    orgContainer.appendChild(el);
  });
}).catch(err => {
  console.error('Failed to load organisations', err);
  document.getElementById('orgs').textContent = 'Unable to load organisations.';
});
