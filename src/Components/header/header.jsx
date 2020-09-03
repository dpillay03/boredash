import React from 'react'
import BoreDash from '../../assets/BoreDashLogo.jpg';

export default class Header extends React.Component {
    render() {
        return <React.Fragment>
            <div class="wrapper">
                <div class="left">Menu</div>
                <div class="central">
                    <img src={BoreDash} alt="BoreDash logo" id="logo" />
                    <p>Fight boredom with boredom</p>
                </div>
                <div class="right">Signup/Login</div>
            </div>
            <div id="color"></div>
        </React.Fragment>
    }
}

