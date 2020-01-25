import React from 'react';
import { NavItem } from '../NavItem/NavItem';
import './NavBar.css'

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.navItems = [
            {name: 'About'},  
            {name: 'Gallery'}, 
            {name: 'Menu'},
            {name: 'Reviews'}];
        this.logoLink = this.logoLink.bind(this);
    }

    logoLink(e) {
        this.props.setPage('Home');
        e.preventDefault();
    }

    render() {
        return (
            <div className="NavBar">
                <h2 onClick={this.logoLink}>Sally's Cafe</h2> 
                {this.navItems.map(navItem => {
                    return <NavItem name={navItem.name} setPage={this.props.setPage}/>
                })}
                <div className="logoLinks">
                <a href="https://www.instagram.com/mcdonalds/" className="fa fa-instagram"></a>
                <a href="https://www.facebook.com/R.I.P.P.D.X/" className="fa fa-facebook"></a>
                </div>
            </div>
        )
    }

}

