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

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

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

## 👨‍💻 Author

**Alper Doğramacı**

- GitHub: [@AlperDog](https://github.com/AlperDog)
- Portfolio: [https://alperdog.github.io/portfolio](https://alperdog.github.io/portfolio)

---

**Built with ❤️ by Alper Doğramacı**
