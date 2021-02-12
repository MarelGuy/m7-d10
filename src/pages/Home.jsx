import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'
import WTComponent from '../components/WTComponent'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: {}
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            city: e.currentTarget.value
        });
    };
    realfetchFunc1 = async () => {
        navigator.geolocation.getCurrentPosition(async function (position) {
            const apiUrl = "https://api.openweathermap.org/data/2.5/onecall";
            const apiKey = "&appid=140e79341f6ce722f22823397a4eafaa";
            const lat = "?lat=" + position.coords.latitude;
            const lon = "&lon=" + position.coords.longitude;
            const url = apiUrl + lat + lon + apiKey;
            await fetch(url)
                .then(async (response) => {
                    var res = await response.json();
                    console.log(res);
                    return await res;
                })
                .then((city) => {
                    this.setState({ city: city })
                })
        });
    }
    realfetchFunc2 = async () => {
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather"
        const apiKey = "&appid=140e79341f6ce722f22823397a4eafaa"
        const q = "?q=" + this.state.city
        const url = apiUrl + q + apiKey
        var res;
        await fetch(url)
            .then(async (response) => {
                res = await response.json();

            })
            .then((city) => {
                this.setState({ city })
                console.log(this.state)
            })
        return res;
    }

    render() {
        const { city } = this.state
        return (
            <div>
                <WTComponent
                // name={city.name ? city.name : "0"}
                // temperature={city.temperature ? city.temperature : "0"}
                // minTemperature={city.main.temp_min ? city.main.temp_min : "0"}
                // maxTemperature={city.main.temp_max ? city.main.temp_max : "0"}
                // humidity={city.main.humidity ? city.main.humidity : "0"}
                // pressure={city.main.pressure ? city.main.pressure : "0"}
                />
                <Form inline>
                    <Button href="" className="mx-auto buttoncss1 d-flex justify-content-right"
                        onClick={this.realfetchFunc1}>Get weather based on your position</Button>
                    <FormControl
                        onChange={(e) => this.onChangeHandler(e)}
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2 formcss1" />
                    <Button onClick={this.realfetchFunc2} className="buttoncss1">Search for a city</Button>
                </Form>
            </div >
        );
    }
}

export default Home;

