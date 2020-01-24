import React from 'react';
import '../BreakfastMenu/BreakfastMenu.css'

export class LunchMenu extends React.Component {
    render() {
        return (
            <div className="Menu">
            <ul className="menu-section">
                <li className="menu-item"><span className="item">Fries</span><span className="price">2</span></li>
                <li className="menu-item"><span className="item">Chicken Wings</span><span className="price">3</span></li>
                <li className="menu-item"><span className="item">Kale Salad</span><span className="price">2</span></li>
                <li className="menu-item"><span className="item">Fruit Cup</span><span className="price">3</span></li>
                <li className="menu-item"><span className="item">Side of Rice</span><span className="price">3</span></li>
            </ul>
            <ul className="menu-section">
                <li className="menu-item"><span className="item">The Farm's Chicken Sandwich</span><span className="price">10</span></li>
                <li className="menu-item"><span className="item">Firehouse Hoagie</span><span className="price">11</span></li>
                <li className="menu-item"><span className="item">Halfway Cheesesteak</span><span className="price">12</span></li>
                <li className="menu-item"><span className="item">Peelout's Burger</span><span className="price">9</span></li>
                <li className="menu-item"><span className="item">Rob Slop</span><span className="price">8</span></li>
                <li className="menu-item"><span className="item">Drive-by Bowl</span><span className="price">10</span></li>
            </ul>
            <ul className="menu-section">
                <li className="menu-item"><span className="item">Coffee</span><span className="price">2</span></li>
                <li className="menu-item"><span className="item">Orange Juice</span><span className="price">3</span></li>
                <li className="menu-item"><span className="item">Hot Tea</span><span className="price">2</span></li>
                <li className="menu-item"><span className="item">Iced Tea</span><span className="price">2</span></li>
                <li className="menu-item"><span className="item">Beer</span><span className="price">3</span></li>
                <li className="menu-item"><span className="item">Seltzer</span><span className="price">2</span></li>
                <li className="menu-item"><span className="item">Sparks</span><span className="price">5</span></li>
            </ul>
        </div>
        )
    }
}