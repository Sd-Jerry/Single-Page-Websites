// ═══════════════════════════════════════════════════
//  Care & Glow — The Beauty Studio
//  Contact Form JS  |  EmailJS + WhatsApp (Method 2)
// ═══════════════════════════════════════════════════

// ── EMAILJS CONFIG ──
const EMAILJS_PUBLIC_KEY  = 'CbtjmyQTUC_VYbflo';
const EMAILJS_SERVICE_ID  = 'service_psq2xvm';
const EMAILJS_TEMPLATE_ID = 'template_1fq5ilf';

// ── WHATSAPP CONFIG ──
// Replace with your WhatsApp business number (with country code, no + or spaces)
const WHATSAPP_NUMBER = '919727791006';   // e.g. 919727791006 for +91 97277 91006

// ── INIT EmailJS ──
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// ── Set min date to today ──
const today = new Date().toISOString().split('T')[0];
document.getElementById('prefDate').setAttribute('min', today);

// ═══════════════════════════════════════════════════
//  VALIDATION
// ═══════════════════════════════════════════════════
function validate() {
  let ok = true;

  // Name (required)
  const name   = document.getElementById('fullName');
  const fName  = document.getElementById('f-name');
  if (!name.value.trim()) { fName.classList.add('has-error'); ok = false; }
  else fName.classList.remove('has-error');

  // Email (optional, but must be valid format if filled)
  const email  = document.getElementById('email');
  const fEmail = document.getElementById('f-email');
  const emailVal = email.value.trim();
  if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    fEmail.classList.add('has-error'); ok = false;
  } else fEmail.classList.remove('has-error');

  // Service (required)
  const svc  = document.getElementById('service');
  const fSvc = document.getElementById('f-service');
  if (!svc.value) { fSvc.classList.add('has-error'); ok = false; }
  else fSvc.classList.remove('has-error');

  // Date (required)
  const date  = document.getElementById('prefDate');
  const fDate = document.getElementById('f-date');
  if (!date.value) { fDate.classList.add('has-error'); ok = false; }
  else fDate.classList.remove('has-error');

  // Time slot (required)
  const timeChosen = document.querySelector('input[name="time"]:checked');
  const timeErr    = document.getElementById('timeErr');
  if (!timeChosen) { timeErr.classList.add('show-err'); ok = false; }
  else timeErr.classList.remove('show-err');

  // Consent (required)
  const consent    = document.getElementById('consent');
  const consentErr = document.getElementById('consentErr');
  if (!consent.checked) { consentErr.classList.add('show-err'); ok = false; }
  else consentErr.classList.remove('show-err');

  return ok;
}

// ═══════════════════════════════════════════════════
//  BUILD WHATSAPP MESSAGE
// ═══════════════════════════════════════════════════
function buildWhatsAppURL(name, phone, email, service, niceDate, time, notes) {
  const msg =
    `🌸 *New Appointment Request*\n` +
    `*Care & Glow - The Beauty Studio*\n` +
    `-----------------------------\n` +
    `👤 *Name:*    ${name}\n` +
    `📞 *Phone:*   ${phone}\n` +
    `📧 *Email:*   ${email}\n` +
    `-----------------------------\n` +
    `💅 *Service:* ${service}\n` +
    `📅 *Date:*    ${niceDate}\n` +
    `⏰ *Time:*    ${time}\n` +
    `-----------------------------\n` +
    `📝 *Notes:*\n${notes}\n` +
    `-----------------------------\n` +
    `_Sent from care-and-glow-the-beauty-studio.vercel.app_`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ═══════════════════════════════════════════════════
//  SUBMIT HANDLER
// ═══════════════════════════════════════════════════
function handleSubmit() {
  if (!validate()) return;

  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span>Sending...';

  // ── Collect values ──
  const name    = document.getElementById('fullName').value.trim();
  const phone   = document.getElementById('phone').value.trim()  || '—';
  const email   = document.getElementById('email').value.trim()  || '—';
  const service = document.getElementById('service').value;
  const date    = document.getElementById('prefDate').value;
  const time    = document.querySelector('input[name="time"]:checked').value;
  const notes   = document.getElementById('notes').value.trim()  || 'None';

  // ── Format date ──
  const dateObj  = new Date(date + 'T00:00:00');
  const niceDate = dateObj.toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  // ── EmailJS params ──
  const templateParams = {
    from_name : name,
    phone     : phone,
    email     : email,
    service   : service,
    date      : niceDate,
    time      : time,
    notes     : notes
  };

  // ── Build WhatsApp URL ──
  const waURL = buildWhatsAppURL(name, phone, email, service, niceDate, time, notes);

  // ── Send via EmailJS first, then show success + WhatsApp button ──
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(() => {
      showSuccess(name, service, niceDate, time, waURL);
    })
    .catch(err => {
      // EmailJS failed — still show success + WhatsApp as fallback
      console.warn('EmailJS error:', err);
      showSuccess(name, service, niceDate, time, waURL);
    });
}

// ═══════════════════════════════════════════════════
//  SHOW SUCCESS SCREEN
// ═══════════════════════════════════════════════════
function showSuccess(name, service, date, time, waURL) {
  // Hide all form sections
  document.querySelectorAll(
    '.section-label, .divider, .field, .grid-2, .consent-box, #consentErr, #timeErr, #setupNotice, #submitBtn'
  ).forEach(el => { el.style.display = 'none'; });

  // Show success block
  const msg = document.getElementById('successMsg');
  msg.style.display = 'block';

  // Fill booking summary pill
  document.getElementById('summaryPill').textContent =
    service + '  ·  ' + date + '  ·  ' + time;

  // Fill WhatsApp button link
  const waBtn = document.getElementById('waBtn');
  if (waBtn) waBtn.href = waURL;
}

// ═══════════════════════════════════════════════════
//  LIVE ERROR CLEARING
// ═══════════════════════════════════════════════════
document.getElementById('fullName').addEventListener('input',
  () => document.getElementById('f-name').classList.remove('has-error'));

document.getElementById('email').addEventListener('input',
  () => document.getElementById('f-email').classList.remove('has-error'));

document.getElementById('service').addEventListener('change',
  () => document.getElementById('f-service').classList.remove('has-error'));

document.getElementById('prefDate').addEventListener('change',
  () => document.getElementById('f-date').classList.remove('has-error'));

document.getElementById('consent').addEventListener('change',
  () => document.getElementById('consentErr').classList.remove('show-err'));

document.querySelectorAll('input[name="time"]').forEach(r =>
  r.addEventListener('change',
    () => document.getElementById('timeErr').classList.remove('show-err'))
);