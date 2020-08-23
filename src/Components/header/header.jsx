import React from 'react'
import BoreDash from '../../assets/BoreDashLogo.jpg';

export default class Header extends React.Component {
    render() {
        return <React.Fragment>
            <div id="logo-container">
                <img src={BoreDash} alt="BoreDash logo" id="logo" />
                <p>Fight boredom with boredom</p>
            </div>
            <div id="color"></div>
        </React.Fragment>
    }
}

