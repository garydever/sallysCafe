import React from 'react';
import './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className="main-footer">
                <div className="footer-item">&#9742; 215-666-9999</div>
                <div className="footer-item"><a id="address" href="https://www.google.com/maps/search/+43+N+Maplepine+St+W.+Philadelphia+19143" alt="43 N Maplepine St W. Philadelphia 19143">43 N Maplepine St W. Philadelphia 19143</a></div>
                <div className="footer-item">M-F 7am-8pm Sa-Su 7am-7pm</div>
            </div>
        )
    }
}