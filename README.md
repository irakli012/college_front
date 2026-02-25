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
