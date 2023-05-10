// TODO: Create module to add weather-api hooks to further process the data.

// Bad practice to upload API to git, was instructed to do so for this lesson.
const api_key = "d41d7a247884440ab8b134831231005";

async function getWeather(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

export { getWeather };