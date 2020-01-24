import React from 'react';
import '../BreakfastMenu/BreakfastMenu.css';

export class DinnerMenu extends React.Component {
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
                <li className="menu-item"><span className="item">Drexel Dropout Dinner</span><span className="price">10</span></li>
                <li className="menu-item"><span className="item">New Angle Salad</span><span className="price">11</span></li>
                <li className="menu-item"><span className="item">Cedar Park Burger</span><span className="price">12</span></li>
                <li className="menu-item"><span className="item">Peelout's Burger</span><span className="price">9</span></li>
                <li className="menu-item"><span className="item">Medstudy Special</span><span className="price">8</span></li>
                <li className="menu-item"><span className="item">Knot Squat Nachos</span><span className="price">10</span></li>
                <li className="menu-item"><span className="item">Philly's Shredded Beef Taco's</span><span className="price">10</span></li>
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