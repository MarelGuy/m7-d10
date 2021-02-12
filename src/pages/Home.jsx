import React from 'react';
import { Button } from 'react-bootstrap'
import { fetchFunc } from '../fetch'
import WTComponent from '../components/WTComponent'

class Home extends React.Component {
    state = {
        city: {}
    }

    realfetchFunc = async () => {
        const res = await fetchFunc(true)
        // this.setState({ city: res })
    }


    render() {
        // var { city } = this.state
        return (
            <div>
                <WTComponent /*name={city.name}*/ />
                <Button href="" className="mx-auto buttoncss1 d-flex justify-content-right"
                    onClick={this.realfetchFunc}>Get weather based on your position</Button>
            </div >
        );
    }
}

export default Home;

