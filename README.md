# VibeCoding - React Three.js Project

A beginner-friendly 3D web application built with React, Three.js, and TailwindCSS. This project features an interactive 3D scene with animated objects and modern UI design.

## 🚀 Features

- **Interactive 3D Scene**: Animated cube, sphere, torus, and floating particles
- **Modern UI**: Beautiful gradient background with glassmorphism effects
- **Responsive Design**: Works on desktop and mobile devices
- **Mouse Controls**: Rotate, pan, and zoom the 3D scene
- **TypeScript**: Full type safety and better development experience
- **TailwindCSS**: Utility-first CSS framework for styling

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Build tool (via Create React App)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vibecoding
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
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How to Use

### 3D Scene Controls
- **Left Click + Drag**: Rotate the camera around the scene
- **Right Click + Drag**: Pan the camera
- **Scroll Wheel**: Zoom in and out
- **Info Panel**: Click the toggle button on the right to show/hide controls

### 3D Objects
- **Blue Cube**: Rotates on X and Y axes
- **Green Sphere**: Rotates on X and Z axes  
- **Orange Torus**: Rotates on X and Y axes
- **White Particles**: Floating background particles

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── ThreeScene.tsx      # Main 3D scene component
│   └── InfoPanel.tsx       # Controls and info panel
├── App.tsx                 # Main application component
├── index.tsx              # Application entry point
└── index.css              # Global styles and TailwindCSS
```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `build` folder to Netlify

### Deploy to GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/vibecoding"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Adding New 3D Objects

1. Create a new component in `src/components/ThreeScene.tsx`
2. Use `useFrame` hook for animations
3. Add the component to the main scene

### Styling Changes

- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for custom TailwindCSS configuration
- Use TailwindCSS classes in components for styling

### Color Scheme

The project uses a custom color palette defined in `tailwind.config.js`:
- Primary colors: Blue shades (#3b82f6, etc.)
- Background: Gradient from purple to blue
- Accent colors: Green, orange, and red for 3D objects

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Coding! 🎉**
