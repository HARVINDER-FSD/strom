import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

interface ContactFormData {
    name: string;
    mobile: string;
    email: string;
    organizationName: string;
    position: string;
    connectingFor: string;
    message?: string;
}

app.post('/api/contact', async (req, res) => {
    try {
        const { name, mobile, email, organizationName, position, connectingFor, message }: ContactFormData = req.body;

        // Validate required fields
        if (!name || !mobile || !email || !organizationName || !position || !connectingFor) {
            return res.status(400).json({ error: 'Required fields are missing' });
        }

        const RESEND_API_KEY = process.env.RESEND_API_KEY;

        if (!RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        // Send email using Resend API
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain
                to: ['storm.organisers@gmail.com'],
                subject: `New Contact Form Submission from ${name}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 10px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #475569;">Name:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #475569;">Mobile:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
                    <a href="tel:${mobile}" style="color: #0ea5e9; text-decoration: none;">${mobile}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #475569;">Email:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
                    <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #475569;">Organization:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
                    ${organizationName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                    <strong style="color: #475569;">Position:</strong>
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
                    ${position}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; ${message ? 'border-bottom: 1px solid #e2e8f0;' : ''}">
                    <strong style="color: #475569;">Connecting For:</strong>
                  </td>
                  <td style="padding: 10px 0; text-align: right; ${message ? 'border-bottom: 1px solid #e2e8f0;' : ''}">
                    <span style="background-color: #dbeafe; color: #1e40af; padding: 5px 10px; border-radius: 5px; font-weight: 600;">
                      ${connectingFor}
                    </span>
                  </td>
                </tr>
                ${message ? `
                <tr>
                  <td colspan="2" style="padding: 15px 0;">
                    <strong style="color: #475569;">Message:</strong>
                    <div style="margin-top: 8px; padding: 12px; background-color: #f8fafc; border-radius: 8px; white-space: pre-wrap;">
                      ${message}
                    </div>
                  </td>
                </tr>
                ` : ''}
              </table>
            </div>

            <hr style="border: none; border-top: 2px solid #e5e7eb; margin: 30px 0;">
            
            <div style="text-align: center; color: #64748b; font-size: 12px;">
              <p>Sent from STORM website contact form</p>
              <p>Submission time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        `,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Resend API error:', data);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
