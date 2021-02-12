import React, { PureComponent } from 'react'
import { Col, Row } from 'react-bootstrap'

class WTComponent extends PureComponent {
    render() {
        return (
            <div className="wtc mx-auto">
                <Row>
                    <h1 className="wtc-headers">Weather at: {this.props.name} </h1>
                    <Col>
                        <ul>
                            <h2 className="wtc-headers">Temperature: {this.props.temperature}</h2>
                            <li><h4 className="wtc-headers">Min temperature: {this.props.minTemperature}</h4></li>
                            <li><h4 className="wtc-headers">Max temperature: {this.props.maxTemperature}</h4></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="wtc-headers"> Humidity: {this.props.humidity}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="wtc-headers">Pressure: {this.props.pressure}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="wtc-headers"> Clouds: {this.props.clouds ? "Yes" : "No"}</h2>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default WTComponent