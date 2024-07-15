import React, { Component } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  componentDidUpdate() {
    if (this.lightbox) {
      this.lightbox.refresh();
    } else {
      this.lightbox = new SimpleLightbox('.gallery a');
    }
  }

  componentWillUnmount() {
    if (this.lightbox) {
      this.lightbox.destroy();
    }
  }

  render() {
    return (
      <ul>
        {this.props.images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
