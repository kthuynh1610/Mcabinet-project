# EmailJS Setup Instructions

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Save your **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Example:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
You have a new message from your website contact form.

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from mcabinetdesign.com.au
```

4. Save your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Configure Your Project

Open the file: `src/config/emailjs.js`

Replace these values:
```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx',    // Your Service ID from Step 2
  TEMPLATE_ID: 'template_xxxxxxx',  // Your Template ID from Step 3
  PUBLIC_KEY: 'your_public_key',    // Your Public Key from Step 4
};
```

## Step 6: Test

1. Start your development server: `npm start`
2. Navigate to the contact form
3. Fill out the form and submit
4. Check your email at `info@mcabinetdesign.com.au`

## Important Notes

- **Free tier limits:** 200 emails/month
- **Emails sent to:** info@mcabinetdesign.com.au
- **Forms using EmailJS:**
  - Contact form in Opening Hours section (homepage)

## Troubleshooting

### Email not sending?
1. Check browser console for errors
2. Verify all IDs are correct in `src/config/emailjs.js`
3. Make sure your email service is connected in EmailJS dashboard
4. Check EmailJS dashboard for delivery status

### Getting errors?
- Make sure the template variables match: `from_name`, `from_email`, `phone`, `message`, `to_email`
- Check that your Public Key is valid
- Ensure your email service is active

## Security Note

The Public Key is safe to commit to your repository. It's designed to be public. However, you can also use environment variables if preferred:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};
```

Then add to your `.env` file (don't commit this file):
```
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

