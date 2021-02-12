import React, { PureComponent } from 'react'

class WTComponent extends PureComponent {
    render() {
        return (
            <div className="wtc mx-auto">
                <h1 id="wtc-h1">Weather at: {this.props.name} </h1>
            </div>
        )
    }
}

export default WTComponent