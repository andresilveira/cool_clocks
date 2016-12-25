import React from 'react';

export default function AnalogClock(props){
  const seconds = props.date.getSeconds() * 6;
  const minutes = props.date.getMinutes() * 6;
  const hours = props.date.getHours() * 30;

  return (
    <div className="analog">
      <div className="marker oneseven"></div>
      <div className="marker twoeight"></div>
      <div className="marker fourten"></div>
      <div className="marker fiveeleven"></div>
      <div className="inner_face">
        <div className="hand hour" style={{transform: `rotate(${hours}deg)`}}></div>
        <div className="hand minute" style={{transform: `rotate(${minutes}deg)`}}></div>
        <div className="hand second" style={{transform: `rotate(${seconds}deg)`}}></div>
      </div>
    </div>
  );
}

AnalogClock.propTypes = {
  date: React.PropTypes.shape({
    getSeconds: React.PropTypes.func.isRequired,
    getMinutes: React.PropTypes.func.isRequired,
    getHours: React.PropTypes.func.isRequired
  })
}
