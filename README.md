# Weather App

A modern, interactive weather application that provides comprehensive weather information with beautiful visualizations.

##LIVE DEMO LINK : weather-app-theta-opal-71.vercel.app

## Features

- **Current Weather**: Real-time temperature, weather conditions, and location details
- **5-Day Forecast**: Extended weather predictions
- **Weather Metrics**: Humidity, pressure, feels-like temperature, and visibility
- **Air Quality Index**: CO, NO2, O3, SO2 levels with overall AQI status
- **Sun & Moon Cycle**: Dynamic circular orbit showing sun/moon position based on time
- **Wind Visualization**: Interactive compass with wind speed and direction
- **Dynamic Backgrounds**: Changes based on weather conditions

## Technologies Used

- HTML5
- CSS3 (with animations and glassmorphism effects)
- JavaScript (ES6+)
- jQuery
- OpenWeatherMap API
- Font Awesome Icons
- Google Fonts

## Setup Instructions

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls

### Local Setup

1. **Clone or Download**
   ```
   Download the project files to your local machine
   ```

2. **File Structure**
   ```
   Weather-App/
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── images/
   │   ├── clear.jpg
   │   ├── cloudy.jpeg
   │   ├── sunny.jpg
   │   ├── foggy.jpg
   │   ├── rainy.avif
   │   └── thunderstorm.jpg
   └── README.md
   ```

3. **Add Weather Images**
   - Create an `images` folder
   - Add background images for different weather conditions
   - Ensure image names match those in `script.js`

4. **Run Locally**
   - Open `index.html` in your web browser
   - Or use a local server:
     ```
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     
     # Using Live Server (VS Code extension)
     Right-click index.html → Open with Live Server
     ```

## How to Use

1. **Search for a City**
   - Enter any city name in the search bar
   - Click the search button or press Enter

2. **View Weather Data**
   - Current temperature and conditions
   - Date and time information
   - 5-day forecast with temperatures

3. **Explore Visualizations**
   - **Sun/Moon Orbit**: Shows current sun/moon position
   - **Wind Compass**: Displays wind direction and speed
   - **AQI Metrics**: Air quality components and status

4. **Dynamic Features**
   - Background changes based on weather
   - Sun moves across the orbit during daytime
   - Moon appears during nighttime


## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Error Handling

- Invalid city names show alert messages
- Network errors are handled gracefully
- Fallback values for missing data

