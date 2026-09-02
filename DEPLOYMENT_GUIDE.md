# ZED SHIRO - Deployment Guide

## Project Overview
ZED SHIRO is a complete restaurant website with:
- Homepage with Hero, Menu Intro, Our Story, Payment Methods, How It Works, and Contact sections
- Full Menu page with 25 items (23 foods + Tea & Coffee)
- Bilingual support (English/Amharic)
- Mobile-first responsive design
- QR code payment integration
- Cart and ordering system

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Modern web browser

## Local Development

### 1. Install Dependencies
```powershell
npm install
```

### 2. Start Development Server
Due to PowerShell execution policy, use:
```powershell
node ./node_modules/vite/bin/vite.js
```

Or configure execution policy and use:
```powershell
npm run dev
```

The app will run at `http://localhost:5173`

### 3. Build for Production
```powershell
node ./node_modules/vite/bin/vite.js build
```

Or:
```powershell
npm run build
```

### 4. Preview Production Build
```powershell
node ./node_modules/vite/bin/vite.js preview
```

Or:
```powershell
npm run preview
```

## Deployment Options

### Option 1: Netlify (Recommended)

1. **Sign up for Netlify** at https://netlify.com

2. **Connect your repository** or drag & drop the `dist` folder

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy!**

### Option 2: Vercel

1. **Sign up for Vercel** at https://vercel.com

2. **Import your project**

3. **Build Settings:**
   - Framework Preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

4. **Deploy!**

### Option 3: GitHub Pages

1. **Install gh-pages:**
```powershell
npm install --save-dev gh-pages
```

2. **Update package.json:**
```json
{
  "homepage": "https://yourusername.github.io/zed_shiro",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js:**
```js
export default defineConfig({
  plugins: [react()],
  base: '/zed_shiro/'
})
```

4. **Deploy:**
```powershell
npm run deploy
```

### Option 4: Traditional Web Hosting

1. **Build the project:**
```powershell
npm run build
```

2. **Upload the `dist` folder contents to your web server**

3. **Configure server:**
   - Set index.html as default document
   - Enable gzip compression
   - Set proper cache headers
   - Configure redirects for SPA routing

## Environment Configuration

### Update Contact Information
Edit `src/component/sections/Contact.jsx`:
```jsx
<a href="tel:+251911000000">+251 911 000 000</a>
```

### Update Opening Hours
Edit `src/translations.js`:
```js
hoursValue: "Monday - Sunday: 1:00 AM - 2:00 PM",
```

### Update Payment Information
Edit `src/component/sections/PaymentMethods.jsx`:
- Update account numbers
- Update account names
- Replace QR code images

## Image Optimization

### Required Image Conversions
Convert these HEIC files to JPG/PNG:
- `public/image/Amharabank-QR.HEIC`
- `public/image/Awashbank-QR.HEIC`
- `public/image/CBE-QR-1.HEIC`
- `public/image/CBE-QR-2.HEIC`

Add missing QR code:
- `public/image/telebirr-qr.png`

### Replace Placeholder Images
Replace Tea and Coffee placeholder URLs in `src/App.jsx`:
```jsx
image: "/image/tea.jpg",     // Instead of Unsplash URL
image: "/image/coffee.jpg",  // Instead of Unsplash URL
```

## Performance Optimization

### 1. Image Optimization
```powershell
# Compress images before deployment
# Use tools like TinyPNG, ImageOptim, or squoosh.app
```

### 2. Enable Gzip Compression
Most hosting platforms enable this by default.

### 3. Set Cache Headers
Configure your hosting to cache static assets:
- CSS/JS: 1 year
- Images: 6 months
- HTML: No cache (or short)

### 4. Add CDN (Optional)
Use Cloudflare or similar CDN for better global performance.

## Post-Deployment Testing

### Critical Tests
- [ ] Homepage loads correctly
- [ ] Menu page displays all 25 items
- [ ] Language toggle works (EN ↔ አማ)
- [ ] Navigation links work
- [ ] Search functionality works
- [ ] Cart system works
- [ ] Order placement works
- [ ] Mobile responsive design works
- [ ] All images load
- [ ] No console errors

### Mobile Testing
Test on real devices:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Scan QR code to access
- [ ] Test ordering flow
- [ ] Test payment QR codes

## Monitoring & Maintenance

### Analytics (Optional)
Add Google Analytics or Plausible:
1. Get tracking ID
2. Add to `index.html`
3. Monitor traffic and user behavior

### Error Tracking (Optional)
Use Sentry or similar:
1. Create account
2. Install SDK
3. Configure error reporting

### Regular Maintenance
- Update dependencies monthly
- Check for security updates
- Monitor performance
- Update menu items as needed
- Update prices seasonally

## Troubleshooting

### Build Errors
```powershell
# Clear node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### PowerShell Execution Policy
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Images Not Loading
- Check file paths (case-sensitive on Linux servers)
- Verify images are in `public/image/` folder
- Check console for 404 errors

### Routing Issues on Server
Add `_redirects` file to `public/` folder:
```
/*    /index.html   200
```

## Support & Contact

Developer: Mesfin  
Portfolio: mesfin-a.netlify.app

## Version History

### v1.0.0 (Current)
- ✅ Complete homepage with 6 sections
- ✅ Full menu page with 25 items
- ✅ Bilingual support (EN/AM)
- ✅ Mobile-first responsive design
- ✅ Cart and ordering system
- ✅ Payment methods with QR codes
- ✅ State-based routing

## License
© 2024 ZED SHIRO. All rights reserved.
