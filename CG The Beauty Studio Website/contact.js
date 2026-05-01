// ── EMAILJS CONFIG ── Replace these 3 values ──
  const EMAILJS_PUBLIC_KEY  = 'ZgcTFO9T-nRcvFclo';
  const EMAILJS_SERVICE_ID  = 'service_jxyup4s';
  const EMAILJS_TEMPLATE_ID = 'template_dehc0e4';

  // ── INIT ──
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('prefDate').setAttribute('min', today);

  // ── VALIDATION ──
  function validate() {
    let ok = true;

    // Name
    const name = document.getElementById('fullName');
    const fName = document.getElementById('f-name');
    if (!name.value.trim()) { fName.classList.add('has-error'); ok = false; }
    else fName.classList.remove('has-error');

    // Email (optional but must be valid if filled)
    const email = document.getElementById('email');
    const fEmail = document.getElementById('f-email');
    const emailVal = email.value.trim();
    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      fEmail.classList.add('has-error'); ok = false;
    } else fEmail.classList.remove('has-error');

    // Service
    const svc = document.getElementById('service');
    const fSvc = document.getElementById('f-service');
    if (!svc.value) { fSvc.classList.add('has-error'); ok = false; }
    else fSvc.classList.remove('has-error');

    // Date
    const date = document.getElementById('prefDate');
    const fDate = document.getElementById('f-date');
    if (!date.value) { fDate.classList.add('has-error'); ok = false; }
    else fDate.classList.remove('has-error');

    // Time
    const timeChosen = document.querySelector('input[name="time"]:checked');
    const timeErr = document.getElementById('timeErr');
    if (!timeChosen) { timeErr.classList.add('show-err'); ok = false; }
    else timeErr.classList.remove('show-err');

    // Consent
    const consent = document.getElementById('consent');
    const consentErr = document.getElementById('consentErr');
    if (!consent.checked) { consentErr.classList.add('show-err'); ok = false; }
    else consentErr.classList.remove('show-err');

    return ok;
  }

  // ── SUBMIT HANDLER ──
  function handleSubmit() {
    if (!validate()) return;

    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span>Sending...';

    const name     = document.getElementById('fullName').value.trim();
    const phone    = document.getElementById('phone').value.trim() || '—';
    const email    = document.getElementById('email').value.trim() || '—';
    const service  = document.getElementById('service').value;
    const date     = document.getElementById('prefDate').value;
    const time     = document.querySelector('input[name="time"]:checked').value;
    const notes    = document.getElementById('notes').value.trim() || 'None';

    // Format date nicely
    const dateObj  = new Date(date + 'T00:00:00');
    const niceDate = dateObj.toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long', year:'numeric' });

    const templateParams = {
      from_name : name,
      phone     : phone,
      email     : email,
      service   : service,
      date      : niceDate,
      time      : time,
      notes     : notes
    };

    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      // Demo mode — simulate success so you can test the UI
      setTimeout(() => showSuccess(name, service, niceDate, time), 1000);
      return;
    }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => showSuccess(name, service, niceDate, time))
      .catch(err => {
        btn.disabled = false;
        btn.innerHTML = 'Request Appointment';
        alert('Something went wrong. Please try again or call us directly.\n\nError: ' + JSON.stringify(err));
      });
  }

  function showSuccess(name, service, date, time) {
    // Hide form fields, show success
    document.querySelectorAll('.section-label, .divider, .field, .grid-2, .consent-box, #consentErr, #timeErr, #setupNotice, #submitBtn').forEach(el => {
      el.style.display = 'none';
    });
    const msg = document.getElementById('successMsg');
    msg.style.display = 'block';
    document.getElementById('summaryPill').textContent = service + '  ·  ' + date + '  ·  ' + time;
  }

  // ── LIVE CLEAR ERRORS ──
  document.getElementById('fullName').addEventListener('input', () => document.getElementById('f-name').classList.remove('has-error'));
  document.getElementById('email').addEventListener('input',    () => document.getElementById('f-email').classList.remove('has-error'));
  document.getElementById('service').addEventListener('change', () => document.getElementById('f-service').classList.remove('has-error'));
  document.getElementById('prefDate').addEventListener('change',() => document.getElementById('f-date').classList.remove('has-error'));
  document.getElementById('consent').addEventListener('change', () => document.getElementById('consentErr').classList.remove('show-err'));
  document.querySelectorAll('input[name="time"]').forEach(r =>
    r.addEventListener('change', () => document.getElementById('timeErr').classList.remove('show-err'))
  );