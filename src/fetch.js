const fetchFunc = async (myPosition, city) => {
    if (myPosition === true) {
        navigator.geolocation.getCurrentPosition(async function (position) {
            const apiUrl = "https://api.openweathermap.org/data/2.5/onecall";
            const apiKey = "&appid=140e79341f6ce722f22823397a4eafaa";
            const lat = "?lat=" + position.coords.latitude;
            const lon = "&lon=" + position.coords.longitude;
            const url = apiUrl + lat + lon + apiKey;
            var res = await fetch(url)
                .then(async (response) => {
                    var res = await response.json();
                    return res;
                })
        });
    } else {
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather"
        const apiKey = "&appid=140e79341f6ce722f22823397a4eafaa"
        const q = "?q=" + city
        const url = apiUrl + q + apiKey
        var res;
        await fetch(url)
            .then(async (response) => {
                res = await response.json();
                console.log(res)
            })
        return res;
    }
};
export { fetchFunc }