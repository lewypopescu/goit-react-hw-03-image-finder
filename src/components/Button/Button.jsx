import React, { Component } from 'react';

import styles from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={styles.button}
        onClick={this.props.onClick}
      >
        Load more
      </button>
    );
  }
}

export default Button;
