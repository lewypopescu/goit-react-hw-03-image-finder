import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={styles.galleryItem}>
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
