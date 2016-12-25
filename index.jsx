import React from 'react';
import ReactDOM from 'react-dom';
import BaseClock from './components/BaseClock';
import AnalogClock from './components/AnalogClock';

ReactDOM.render(
  <BaseClock>
    <AnalogClock date={new Date()} />
  </BaseClock>,
  document.getElementById("app")
);
