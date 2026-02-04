<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1joTO86p2ED_z5KCKxpzv6Y3EOm60WTKH

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Configure [EmailJS](https://www.emailjs.com/) settings in [.env.local](.env.local):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Run the app:
   `npm run dev`

### Vercel Deployment
When deploying to Vercel, make sure to add the three `VITE_EMAILJS_...` environment variables in the project settings dashboard.

### Features
- Modern localized UI (EN/KA)
- Responsive Course Carousel
- Automated Registration via EmailJS
- Dynamic Program Detail Pages
