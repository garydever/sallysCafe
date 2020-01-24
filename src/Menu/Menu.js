import React from 'react';
import './Menu.css';
import { BreakfastMenu } from './BreakfastMenu/BreakfastMenu';
import { LunchMenu } from './LunchMenu/LunchMenu';
import { DinnerMenu } from './DinnerMenu/DinnerMenu';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'breakfast'
        }

        this.menuOptions = {
            'Breakfast': 'breakfast',
            'Lunch': 'lunch',
            'Dinner': 'dinner'
        }

        this.handleMenuChange = this.handleMenuChange.bind(this);
        this.getMenuClass = this.getMenuClass.bind(this);
    } 

    handleMenuChange(menuOptionValue) {
        this.setState({currentMenu: menuOptionValue});
    }
    
    getMenuClass(menuOption) {
        if (this.state.currentMenu === this.menuOptions[menuOption]) {
            return 'active';
        } else {
            return 'default';
        }
    }

    renderMenuOptions() {
        return Object.keys(this.menuOptions).map((menuOption) => {
            let menuOptionValue = this.menuOptions[menuOption];
            return  <li key={menuOptionValue}
                        className={this.getMenuClass(menuOption)}
                        onClick={this.handleMenuChange.bind(this, menuOptionValue)}>
                        {menuOption}
                    </li>
        })
    }

    render () {
        return (
                <div className="main-menu">
                        <ul className="MenuNav">
                            {this.renderMenuOptions()}
                        </ul>
                    <div className="main-menu-menu">
                        {this.state.currentMenu === 'breakfast' && <BreakfastMenu />}
                        {this.state.currentMenu === 'lunch' && <LunchMenu />}
                        {this.state.currentMenu === 'dinner' && <DinnerMenu />}
                    </div>
                </div>
        )
    }
}