import React, { Component } from 'react';
import './style.scss'
import Menues from '../constants/Menues'
import NavigationItems from './NavigationItems'
import DrawerToggleButton from './DrawerToggleButton'
import SideDrawer from './SideDrawer'

class NavigationWidget extends Component{
    state = {
        SideDrawerOpen: false
    }
    drawerToggleClicHandler = () => {
        this.setState((prevState) => {
            return {SideDrawerOpen: !prevState.SideDrawerOpen}
        })
    }
    backdropClickHandler = () => {
        this.setState({SideDrawerOpen: false})
    }
    render(){
        return(
            <header className="widget__header">
                <div className="widget__toggle-button">
                    <div className="widget__mobile">
                        <DrawerToggleButton click={this.drawerToggleClicHandler} />
                        <SideDrawer items={Menues} show={this.state.SideDrawerOpen}/>
                    </div>
                </div>
                <nav>
                    <a className="widget__logo" href="/">Company Name</a>
                    <div className="widget__navigation-items">
                        <NavigationItems items={Menues} show={this.state.SideDrawerOpen} />
                    </div>
                </nav>
            </header>

        )
    }
}

export default NavigationWidget;