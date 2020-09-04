import React from 'react'

export default class About extends React.Component {
    constructor() {
        super()
        this.state = {
            showNav: false
        }
    }

    render() {
        return <React.Fragment>
            <h1>About</h1>
        </React.Fragment>
    }
}

