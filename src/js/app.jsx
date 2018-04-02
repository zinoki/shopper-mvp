import React, { Component } from 'react';
import { render } from 'react-dom';
import { body, img } from '../css/app.css';
import keenImage from '../assets/keen.png';
import { Header } from './Header';
import { DailySales } from './DailySales';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <Header />
        <DailySales />
        Hello from react
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
