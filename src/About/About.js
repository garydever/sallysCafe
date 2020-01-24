import React from 'react';
import './About.css';

export class About extends React.Component {
    render () {
        return (
            <div className="about-main">
                    <p>
                        Sally's Cafe was founded in 1987 by TV talk show host Sally Jesse Raphael. 
                        For well over 30 years, Sally's has served delicious home-cooked food in
                        West Philadelphia. Join us 7 days a week for breakfast, lunch, or dinner.
                    </p>
                    <ul>
                        <li>Mon-Fri 7am-8pm</li>
                        <li>Sat-Sun 7am-7pm</li>
                        <li ><a id="about-address" href="https://www.google.com/maps/search/+43+N+Maplepine+St+W.+Philadelphia+19143" alt="43 N Maplepine St W. Philadelphia 19143">43 N Maplepine St</a></li>
                        <li ><a id="about-address" href="https://www.google.com/maps/search/+43+N+Maplepine+St+W.+Philadelphia+19143" alt="43 N Maplepine St W. Philadelphia 19143">W. Philadelphia 19143</a></li>
                        <li><a id="about-phone" href="tel:+2156669999">&#9742; 215-666-9999</a></li>
                    </ul>
                    <h3>See you soon!</h3>
                    <h3>... Sally</h3>
            </div>
        )
    }
}

