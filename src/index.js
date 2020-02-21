import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(

  <div>
    <ImageSlider />
    <Bomb initialCount={120} finalCount={[1,2,3]} />
  </div>,
  document.getElementById('root')
);
