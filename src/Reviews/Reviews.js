import React from 'react';
import './Reviews.css';

export class Reviews extends React.Component {
    render () {
        return (
            <div className="review-main">
                <div className="review">
                    "Without a doubt the best food I have ever tasted, and I have tasted a LOT of food.
                    The chicken was like a fine steak. The salads were like a lush Oregon forest. And the 
                    beer got me totally wasted. Thank you Sally's for a job well done!"
                    <span className="quotePerson">Frank Rizzo</span>
                </div>
                <div className="review">
                    "I've been coming to Sally's with my kids for over 50 years. In fact, I've been coming to
                     Sally's before Sally's was Sally's! I used to sit in this lot watching my kids run around
                     just dreaming that someone would open a cafe. Thank you Sally!"
                     <span className="quotePerson">Marlon Brando</span>
                </div>
                <div className="review">
                    "I come in every morning for breakfast and I am never disappointed. I order two
                    eggs with bacon and toast and that is exactly what they serve me. Every day
                    I thank god that Sally's Cafe exists. I don't know how I'd eat without it."
                    <span className="quotePerson">Rocky Balboa</span>
                </div>
            </div>
        )
    }
}