import React from 'react'
import BoreDash from '../../assets/BoreDashLogo.jpg';
import Toilet from '../../assets/toilet.png';
import Favorites from '../../assets/favorite.png';
import { SideNav, MenuIcon } from 'react-simple-sidenav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Favorite from '../favorites/favorites';
import About from '../about/about';
import Users from '../users/users';


export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            showNav: false
        }
    }

    render() {
        return <React.Fragment>
            <div class="wrapper">
                <div class="left">
                    <MenuIcon style={{ backgroundColor: "000", color: "green", width: "40px", height: "40px" }} onClick={() => this.setState({ showNav: true })} />
                    <Router>
                        <SideNav
                            title="BoreDash"
                            titleStyle={{ backgroundColor: '#000', color: "white" }}
                            itemStyle={{ backgroundColor: '#fff', listStyleType: "none" }}
                            showNav={this.state.showNav}
                            onHideNav={() => this.setState({ showNav: false })}
                            items={[
                                <Switch>
                                    <Route path="/favorites">
                                        <Favorite />
                                    </Route>
                                    <Route path="/about">
                                        <About />
                                    </Route>
                                    <Route path="/users">
                                        <Users />
                                    </Route>
                                </Switch>
                            ]}
                        />
                    </Router>
                </div>
                <div class="central">
                    <img src={BoreDash} alt="BoreDash logo" id="logo" />
                    <p>Spend more time on the <img alt="toilet " src={Toilet} id="toilet"></img></p>
                </div>
                <div class="right">
                    <img className="header-favorites" src={Favorites} alt="product favorite" />
                </div>
            </div>
            <div id="color"></div>
        </React.Fragment>
    }
}

