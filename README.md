# weather

This is a React-based weather application that fetches and displays the daily maximum and minimum temperature, weather icon, and the day of the week for a specific location based on the entered zip code.

## Project Setup

1. **Clone the repository:**

   `git clone https://github.com/fsrur/weather.git`

2. **Install the dependencies:**

   Navigate to the project directory and run the following command:

   `npm install`

3. **Set up environment variables:**

   This project uses an environment variable ('REACT_APP_API_KEY') for the OpenWeatherMap API key. You need to create a '.env' file in the project root and add your API key like this:

   'REACT_APP_API_KEY = your_open_weather_map_api_key'

   Replace 'your_open_weather_map_api_key' with your actual API key.

4. **Project Files:**

   Navigate to the 'src' directory, where you will find the main application files:

   - 'Header.js': Contains the 'Header' component.
   - 'Instructions.js': Contains the 'Instructions' component.
   - 'Button.js': Contains the 'Button' component.
   - 'Weather.js': Contains the 'Weather' component.

## Run the Application

In the project directory, you can run:

`npm start`

This runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Project Structure

The application is composed of four main React components: 'Weather', 'Instructions', 'Header', and 'Button'.

1. **'Header' Component:** It simply renders the header of the application.

2. **'Instructions' Component:** It provides information about the application and how it works.

3. **'Button' Component:** It is responsible for handling the user's input (zip code). It captures the zip code through a form, and on submission, it calls the parent ('Weather') component's function to set the state of the zip code.

4. **'Weather' Component:** It acts as the parent component. It takes the zip code from the 'Button' component and uses it to fetch the latitude and longitude. Then, it uses the fetched latitude and longitude to get the weather data. The weather data, such as maximum and minimum temperature, weather icon, and day of the week, are then set into the state and displayed. The 'Weather' component makes two main fetch requests:

   - **Location fetch:** It fetches the latitude and longitude based on the provided zip code.

   - **Weather fetch:** It fetches the weather data based on the received latitude and longitude.
