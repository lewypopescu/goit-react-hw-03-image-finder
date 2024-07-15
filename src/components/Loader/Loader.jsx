import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner';

class LoaderComponent extends Component {
  render() {
    return (
      <div>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}

export default LoaderComponent;
