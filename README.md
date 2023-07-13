# weather
This is a React-based weather app that fetches and displays the daily maximum and minimum temperature, weather icon, and the day of the week for the current location based on the latitude and longitude.

## Project Setup
1
Clone the repository:

`git clone <repository_link>`

2
Install the dependencies:

Navigate to the project directory and run the following command:

`npm install`

3
Set up environment variables:

This project uses an environment variable <b>('REACT_APP_API_KEY')</b> for the OpenWeatherMap API key. You need to create a <b>'.env'</b> file in the project root and add your API key like this:

`REACT_APP_API_KEY=your_open_weather_map_api_key`
Replace <b>'your_open_weather_map_api_key'</b> with your actual API key.

## Run the Application
In the project directory, you can run:

`npm start`

This runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Project Structure
The application is composed of a single React component <b>'Weather'</b>. The <b>'Weather'</b> component makes two main fetch requests:

1. Location fetch: It fetches the latitude and longitude based on the provided zip code.

2. Weather fetch: It fetches the weather data based on the received latitude and longitude.

The component uses React Hooks (<b>'useState'</b> and <b>'useEffect'</b>) for handling state and side effects.

It also uses <b>'axios'</b> for making the initial <b>'get'</b> request to fetch the data.
