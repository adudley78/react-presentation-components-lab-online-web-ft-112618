// Code SimpleComponent Here

import React, { Component } from 'react'

const defaultMood = "happy"

class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    render() {
        <div>
            onClick={this.props.onChange}
            {this.props.mood || defaultMood}
        </div>
    }
}

handleClick () => {
    this.event.target.mood = "sad"
}

export default SimpleComponent