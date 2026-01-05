# Saiful Haque - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS showcasing MERN stack development skills.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Dark Mode Support** - Automatic dark/light theme switching
- **Interactive Portfolio** - Filterable project showcase
- **Smooth Animations** - Hover effects and transitions
- **Contact Form** - Working contact form with validation
- **Modern UI** - Clean, professional design

## 🛠️ Technologies Used

- React 18
- Tailwind CSS
- Material Icons
- Google Fonts (Inter & Outfit)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saiful-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section with intro
│   ├── Portfolio.js       # Portfolio showcase with filtering
│   ├── Skills.js          # Technical skills grid
│   ├── Contact.js         # Contact form and info
│   └── Footer.js          # Footer with social links
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
Update the Tailwind config in `public/index.html`:
```javascript
colors: {
  primary: "#111111",
  "background-light": "#ffffff",
  "background-dark": "#1a1a1a",
}
```

### Portfolio Projects
Edit the `portfolioItems` array in `src/components/Portfolio.js` to add your own projects.

### Skills
Update the `skills` array in `src/components/Skills.js` to reflect your technical skills.

### Contact Information
Modify contact details in `src/components/Contact.js` and `src/components/Header.js`.

## 📱 Sections

1. **Header** - Navigation with smooth scrolling
2. **Hero** - Introduction and call-to-action
3. **Portfolio** - Filterable project showcase
4. **Skills** - Technical skills grid
5. **Contact** - Contact form and information
6. **Footer** - Social links and copyright

## 🌙 Dark Mode

The website automatically detects and saves user's dark mode preference using localStorage.

## 📧 Contact Form

The contact form includes:
- Name validation
- Email validation
- Project type selection
- Message textarea
- Form submission handling

## 🚀 Deployment

This project can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ by Saiful Haque