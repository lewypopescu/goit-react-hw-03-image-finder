import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.image.largeImageURL} data-lightbox="gallery">
          <img
            src={this.props.image.webformatURL}
            alt={this.props.image.tags}
          />
        </a>
      </li>
    );
  }
}

export default ImageGalleryItem;
