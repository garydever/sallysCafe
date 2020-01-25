import React from 'react';
import './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className="main-footer">
                <div className="footer-item"><a id="footer-phone" href="tel:+2156669999">&#9742; 215-666-9999</a></div>
                <div className="footer-item"><a id="address" href="https://www.google.com/maps/search/+43+N+Maplepine+St+W.+Philadelphia+19143" alt="43 N Maplepine St W. Philadelphia 19143">43 N Maplepine St W. Philadelphia 19143</a></div>
                <div className="footer-item">M-F 7am-8pm Sa-Su 7am-7pm</div>
                <div className="footer-item" id="copyright">&copy; Sally's Cafe 2020</div>
            </div>
        )
    }
}