# Angular Weather Dashboard 🌤️

A modern, responsive weather dashboard built with Angular that allows users to track weather conditions in multiple cities. The application features a clean, intuitive interface with real-time weather updates powered by the OpenWeather API.

![Snímek obrazovky 2024-10-22 192404](https://github.com/user-attachments/assets/3b688991-de43-4f22-824f-80f3cdfaf30b)

## 🌟 Features

- 🎯 Real-time weather data display
- 🏙️ Multi-city weather tracking
- 💾 Local storage persistence of user preferences
- 🎨 Modern, responsive design
- 🌡️ Detailed weather metrics including:
  - Temperature
  - Humidity
  - Wind speed
  - Weather conditions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v16 or higher)
- OpenWeather API key (sign up at [OpenWeather](https://openweathermap.org/api))

### ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create environment files:

Create two files in the `src` directory:
- `environment.ts` (for development)
- `environment.prod.ts` (for production)

Add the following content to both files, replacing `YOUR_API_KEY` with your OpenWeather API key:

```typescript
export const environment = {
  production: false, // use true for environment.prod.ts
  apiKey: 'YOUR_API_KEY'
};
```

4. Start the development server:
```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200`

## 🛠️ Tech Stack

- Angular 16+
- TypeScript
- OpenWeather API
- HTML5/CSS3
- Local Storage API

## 📱 Features Breakdown

### Weather Cards
- Display current temperature
- Show weather conditions
- Humidity percentage with visual indicator
- Wind speed with scale representation

### City Management
- Add new cities via search
- Remove existing cities
- Persistent storage of city preferences
- Random default city on first launch

### UI/UX
- Responsive grid layout
- Smooth animations and transitions
- Intuitive modal interface for adding cities
- Error handling and loading states

## 🔑 API Key Setup

To use this application, you need to:

1. Sign up for a free account at [OpenWeather](https://openweathermap.org/api)
2. Generate an API key
3. Create the environment files as described in the installation steps
4. Add your API key to both environment files

**Note:** Never commit your API keys to version control. The environment files are already included in `.gitignore`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Project Link: [https://github.com/your-username/weather-dashboard](https://github.com/your-username/weather-dashboard)
