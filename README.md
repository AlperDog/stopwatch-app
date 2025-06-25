# ⏱️ Stopwatch App

A precise and feature-rich stopwatch application built with React and TypeScript. Perfect for timing workouts, races, or any activity that requires accurate time measurement.

## 🚀 Live Demo

**[Try the Stopwatch App Live](https://alperdog.github.io/stopwatch-app)**

## ✨ Features

- **Precise Timing**: Millisecond accuracy with 10ms intervals
- **Start/Stop Controls**: Intuitive play/pause functionality
- **Lap Timing**: Record split times while the stopwatch is running
- **Reset Function**: Clear all data and reset to zero
- **Lap History**: Scrollable list of recorded laps with individual and cumulative times
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional UI**: Clean, modern interface with smooth animations

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Bootstrap 5** - Responsive UI components
- **CSS3** - Custom styling and animations
- **GitHub Pages** - Automated deployment

## 📱 Screenshots

### Desktop View

- Large, easy-to-read timer display
- Color-coded control buttons
- Organized lap history

### Mobile View

- Touch-friendly interface
- Responsive layout
- Optimized for small screens

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AlperDog/stopwatch-app.git
   cd stopwatch-app
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

### Building for Production

```bash
npm run build
```

### Deployment

The app is automatically deployed to GitHub Pages:

```bash
npm run deploy
```

## 🎯 How to Use

1. **Start the Timer**: Click the green "Start" button to begin timing
2. **Record Laps**: Click "Lap" to record split times while the timer is running
3. **Pause**: Click "Stop" to pause the timer
4. **Resume**: Click "Start" again to continue from where you left off
5. **Reset**: Click "Reset" to clear all data and start over

## 📊 Features in Detail

### Timer Display

- **Format**: MM:SS.ms (minutes:seconds.milliseconds)
- **Font**: Monospace for consistent character width
- **Size**: Large display for easy reading

### Lap Functionality

- **Individual Lap Times**: Shows time for each specific lap
- **Cumulative Times**: Shows total time up to each lap
- **Scrollable List**: Handles multiple laps with smooth scrolling
- **Visual Separation**: Each lap is clearly distinguished

### Control Buttons

- **Start/Stop**: Toggle between green play and red pause
- **Lap**: Only active when timer is running
- **Reset**: Always available to clear everything

## 🔧 Technical Implementation

### React Hooks Used

- `useState` - Manage timer state and lap data
- `useEffect` - Handle timer intervals and cleanup
- `useRef` - Store interval reference for proper cleanup

### Performance Optimizations

- **Efficient Rendering**: Only updates when necessary
- **Memory Management**: Proper cleanup of intervals
- **Smooth Animations**: CSS transitions for better UX

### Code Structure

```
src/
├── components/
│   └── Stopwatch.tsx    # Main stopwatch component
├── App.tsx              # Root component
├── App.css              # Global styles
└── index.tsx            # Entry point
```

## 🎨 Customization

### Styling

The app uses a dark theme with purple accents (`#aa00ff`). You can customize:

- Colors in `App.css`
- Button styles
- Timer display font
- Layout spacing

### Adding Features

Easy to extend with:

- Sound notifications
- Multiple timers
- Export functionality
- Custom themes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Alper Doğramacı**

- GitHub: [@AlperDog](https://github.com/AlperDog)
- Portfolio: [https://alperdog.github.io/portfolio](https://alperdog.github.io/portfolio)

## 🙏 Acknowledgments

- React team for the amazing framework
- Bootstrap for the responsive UI components
- GitHub Pages for free hosting
- The open-source community for inspiration

---

**Built with ❤️ by Alper Doğramacı**
