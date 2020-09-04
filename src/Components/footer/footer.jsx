import React from 'react'

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            showNav: false
        }
    }

    render() {
        return <React.Fragment>
            <div id="color"></div>
            <div class="wrapper">
                <div class="left">
                </div>
                <div class="central">
                    <p>BoreDash © 2020</p>
                    <p>BoreDash is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
                </div>
                <div class="right">
                </div>
            </div>
        </React.Fragment>
    }
}

