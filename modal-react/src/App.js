import React from 'react';
import './App.css';

import ModalImage from './components/modal-image/modal-image';
import img1 from './images/img1.png';
import img2 from './images/img2.png';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Image Modal</h2>
        <p>Click the image below to show the modal.</p>
        <div
          style={{
            display: `flex`
          }}
        >
          <ModalImage
            src={img1}
            alt={`A`}
            ratio={`3:2`}
          />
          <ModalImage
            src={img2}
            alt={`B`}
            ratio={`3:2`}
          />
        </div>
      </div>
    );
  }
}