import React from 'react';
import './Gallery.css';

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentName: 'Image 1',
            currentSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery1.jpg', 
        }
        this.gallery = [
                {
                name: 'Image 1',
                imageSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery1.jpg',
                thumbSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery1thumb.jpg'
                },
                {
                name: 'Image 2',
                imageSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery2.jpeg',
                thumbSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery2thumb.jpeg'
               },
               {
                name: 'Image 3',
                imageSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery3.jpeg',
                thumbSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery3thumb.jpeg'
               },
               {
                name: 'Image 4',
                imageSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery4.jpeg',
                thumbSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery4thumb.jpeg'
               },
               {
                name: 'Image 5',
                thumbSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery5thumb.jpeg',
                imageSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery5.jpeg'
               },
               {
                name: 'Image 6',
                thumbSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery6thumb.jpeg',
                imageSrc: 'https://cafe-images.s3.us-east-2.amazonaws.com/gallery6.jpeg'
               }]
        this.renderThumbnails = this.renderThumbnails.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getThumbClass = this.getThumbClass.bind(this);
    }

    handleClick(e) {
        const name = e.target.alt;
        const img = this.gallery.find(object => object.name === name);
        this.setState({currentName: name, currentSrc: img.imageSrc});
    }

    renderThumbnails() {
        return this.gallery.map(image => {
            let imageValue = this.gallery.find(object => object.name === image.name);
            return <img src={image.thumbSrc} alt={image.name} className={this.getThumbClass(imageValue)} onClick={this.handleClick} />
        })
    }

    getThumbClass(imageValue) {
        if (imageValue.name === this.state.currentName) {
            return 'activeImage';
        } else {
            return 'defaultImage';
        }
    }

    render () {
        return (
            <div className="gallery-main">
                <div className="thumb-gallery">
                        {this.renderThumbnails()}
                </div>
                <img className="featured" src={this.state.currentSrc} alt={this.state.currentName}/>
            </div>
        )
    }
}