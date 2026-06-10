'use server';

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
};

type ContactResult = { ok: true } | { ok: false; error: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendContactMessage(
  data: ContactFormData
): Promise<ContactResult> {
  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  const company = (data.company || '').trim();
  const reason = (data.reason || '').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !message) {
    return { ok: false, error: 'Please complete your name, email, and message.' };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.');
    return { ok: false, error: 'The contact form is temporarily unavailable. Please email directly.' };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company) || '&mdash;';
  const safeReason = escapeHtml(reason) || '&mdash;';
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; font-size: 18px; color: #0A0E1A;">New inquiry from lutherstarks.com</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 6px 12px 6px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Name</td><td style="padding: 6px 0;">${safeName}</td></tr>
        <tr><td style="padding: 6px 12px 6px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Email</td><td style="padding: 6px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding: 6px 12px 6px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Company</td><td style="padding: 6px 0;">${safeCompany}</td></tr>
        <tr><td style="padding: 6px 12px 6px 0; font-weight: 600; vertical-align: top; white-space: nowrap;">Reason</td><td style="padding: 6px 0;">${safeReason}</td></tr>
      </table>
      <div style="margin-top: 20px;">
        <div style="font-weight: 600; margin-bottom: 6px;">Message</div>
        <div style="padding: 14px 16px; background: #f5f5f7; border-radius: 8px; border: 1px solid #e5e5ea;">${safeMessage}</div>
      </div>
    </div>
  `;

  const text = [
    'New inquiry from lutherstarks.com',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '—'}`,
    `Reason: ${reason || '—'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Luther Starks Website <leads@lutherstarks.com>',
        to: ['Luther.Starks@prth.com'],
        reply_to: email,
        subject: `New inquiry from ${name}${company ? ' (' + company + ')' : ''}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Resend API error:', response.status, detail);
      return { ok: false, error: 'Something went wrong sending your message. Please try again.' };
    }

    return { ok: true };
  } catch (err) {
    console.error('Failed to send contact message:', err);
    return { ok: false, error: 'Something went wrong sending your message. Please try again.' };
  }
}
