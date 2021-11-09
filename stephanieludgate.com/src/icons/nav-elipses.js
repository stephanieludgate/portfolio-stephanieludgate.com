import React, { Component } from 'react';

class ElipsesSVG extends Component {
  render() {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 30 10" className="elipses">
            <circle className="st0" cx="4" cy="5" r="4"/>
            <circle className="st0" cx="15" cy="5" r="4"/>
            <circle className="st0" cx="26" cy="5" r="4"/>
        </svg>
        </>
    );
  }
}

export default ElipsesSVG;
