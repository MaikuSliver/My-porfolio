# Mike Angel Manipon - Portfolio

Personal portfolio website for **Mike Angel A. Manipon**, IT Professional, Civil Service Commission (CSC) Professional Eligible, and IT Specialist.

Built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 How to Deploy / Update on Vercel

This project is pre-configured for Vercel with `vercel.json` (SPA routing rewrites, asset caching, and Vite build configuration).

### Option 1: Automatic Deployment via GitHub (Recommended)

1. **Push your code to your GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Update portfolio with transparent borderless photo and contact details"
   git branch -M main
   git remote add origin https://github.com/MaikuSliver/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Import your GitHub repository (`MaikuSliver/<your-repo-name>`).
5. Vercel automatically detects the framework:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Vercel will build and publish your site with a live URL (e.g., `https://mike-angel-manipon.vercel.app`).
7. **Every time you push a commit to `main`**, Vercel will automatically redeploy the updated portfolio within seconds!

---

### Option 2: Deploy via Vercel CLI

If you prefer deploying directly from your terminal or command line:

1. In your project folder, run:
   ```bash
   npx vercel
   ```
2. Follow the quick prompts in your terminal:
   - Log in to your Vercel account when prompted.
   - Confirm project settings (defaults to Vite, root `./`, output `dist`).
3. To deploy directly to production:
   ```bash
   npx vercel --prod
   ```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Run TypeScript checks
npm run lint
```

---

## 📂 Project Structure

- `index.html` - Page title ("Mike Angel Manipon Portfolio"), favicon, meta tags
- `vercel.json` - Vercel configuration for SPA rewrites (`/(.*) -> /index.html`) & headers
- `src/data/portfolioData.ts` - All portfolio content (About, Experience, Education, Contact, Socials)
- `src/components/Hero.tsx` - Hero section with borderless highlighted profile photo & quick contact line
- `src/components/ContactModal.tsx` - Contact modal with direct-to-Gmail web client composer
- `public/assets/` - Favicon and transparent profile photo assets
