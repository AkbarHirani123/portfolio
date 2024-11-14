const endpoints = {
    GET_IP_API: 'https://ipinfo.io/json',
    WEATHER_API: `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=2e59a9a713ef7db4c74151871f032d59`,
    // WEATHER_API: `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${process.env.WEATHER_API_KEY}`,
    WEATHER_ICON: 'https://openweathermap.org/img/wn/'
};

export default endpoints;
