import React from 'react';

export default class BaseClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const formatedClocks = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        date: this.state.date
      })
    );

    return (
      <div>{formatedClocks}</div>
    );
  }
}

BaseClock.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element
  ]),
}
