import React from 'react';
import './NavItem.css';
export class NavItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
            let name = this.props.name;
            this.props.setPage(name);
            e.preventDefault();
    }

    render() {
        return  (
                <div className='NavItem'>
                    <a className='nav-link' onClick={this.handleClick}>
                        {this.props.name}
                    </a>
                </div>
                )
    }
}