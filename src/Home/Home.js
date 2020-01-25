import React from 'react';
import './Home.css';

export class Home extends React.Component {
    render() {
        return (
            <div className="home-main">
                <ul className="home-info">
                        <li>Mon-Fri 7am-8pm Sat-Sun 7am-7pm</li>
                        <li ><a id="home-address" href="https://www.google.com/maps/search/+43+N+Maplepine+St+W.+Philadelphia+19143" alt="43 N Maplepine St W. Philadelphia 19143">43 N Maplepine St W. Philadelphia 19143</a></li>
                        <li><a id="home-phone" href="tel:+2156669999">&#9742; 215-666-9999</a></li>
                    </ul>
                <img src="https://cafe-images.s3.us-east-2.amazonaws.com/cafe-exterior.jpg" alt="Cafe image" />      
            </div>
        )
    }
}