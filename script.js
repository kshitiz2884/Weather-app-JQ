$(document).ready(function() {
    const apiKey = '0bab7dd1bacc418689b143833220304'; // Replace with your actual API key
    const baseUrl = 'https://api.weatherapi.com/v1/';

    $('#getWeatherBtn').click(function() {
        const city = $('#cityInput').val();
        if (city !== '') {
            // const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
            const url=`${baseUrl}current.json?key=${apiKey}&q=${city}`;
            $.ajax({
                url: url,
                method: 'GET',
                success: function(data) {
                    console.log(data);
                    displayWeather(data);
                },
                error: function() {
                    $('#weatherInfo').html('<p>Error fetching weather data.</p>');
                }
            });
        }
    });

    function displayWeather(data) {
        const cityName = data.location.name;
        const region=data.location.region
        const temperature = data.current.temp_c;
        const pre= data.current.condition.text;
        const weatherDescription = data.current.precip_in;
        // const iconCode = data.current.condition.icon;
        // const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

        const weatherHtml = `
            <h2>${cityName}</h2>
            <h3>${region}</h3>
            <p>${temperature}°C</p>
            <p>${weatherDescription}</p>
            <p>${pre}</p>
        `;

        $('#weatherInfo').html(weatherHtml);
    }
});
