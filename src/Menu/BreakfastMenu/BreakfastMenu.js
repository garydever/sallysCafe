import React from 'react';
import './BreakfastMenu.css'

export class BreakfastMenu extends React.Component {
    render() {
        return (
            <div className="Menu">
                <ul className="menu-section">
                    <li className="menu-item"><span className="item">Toast</span><span className="price">2</span></li>
                    <li className="menu-item"><span className="item">Two Eggs</span><span className="price">3</span></li>
                    <li className="menu-item"><span className="item">Hashbrowns</span><span className="price">2</span></li>
                    <li className="menu-item"><span className="item">Bacon or Sausage</span><span className="price">3</span></li>
                    <li className="menu-item"><span className="item">Side of Greens</span><span className="price">3</span></li>
                </ul>
                <ul className="menu-section">
                    <li className="menu-item"><span className="item">Baltimore Scramble</span><span className="price">8</span></li>
                    <li className="menu-item"><span className="item">Kingsessing Skillet</span><span className="price">10</span></li>
                    <li className="menu-item"><span className="item">Chester Frittata</span><span className="price">8</span></li>
                    <li className="menu-item"><span className="item">Woodland Waffles</span><span className="price">8</span></li>
                    <li className="menu-item"><span className="item">Bartram's Pancakes</span><span className="price">8</span></li>
                    <li className="menu-item"><span className="item">Clark Park Special</span><span className="price">10</span></li>
                </ul>
                <ul className="menu-section">
                    <li className="menu-item"><span className="item">Coffee</span><span className="price">2</span></li>
                    <li className="menu-item"><span className="item">Orange Juice</span><span className="price">3</span></li>
                    <li className="menu-item"><span className="item">Hot Tea</span><span className="price">2</span></li>
                    <li className="menu-item"><span className="item">Iced Tea</span><span className="price">2</span></li>
                    
                </ul>
            </div>
        )
    }
}