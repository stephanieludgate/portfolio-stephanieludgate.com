import React, { Component } from 'react';

class GradientBar extends Component {
  render() {
    return (
        <>
        <svg className="project-card-separator" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 96.33 4">
            <defs>
                <linearGradient id="gradient-bar-1" y1="2" x2="96.33" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#EEAA95"/>
                    <stop offset="1" stopColor="#E2B1C5"/>
                </linearGradient>
                <linearGradient id="gradient-bar-2" y1="2" x2="96.33" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#E2B1C5"/>
                    <stop offset="1" stopColor="#D3A8E0"/>
                </linearGradient>
                <linearGradient id="gradient-bar-3" y1="2" x2="96.33" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#D3A8E0"/>
                    <stop offset="1" stopColor="#C39EFA"/>
                </linearGradient>
                <linearGradient id="gradient-bar-4" y1="2" x2="96.33" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#C39EFA"/>
                    <stop offset="1" stopColor="#D3A8E0"/>
                </linearGradient>
                <linearGradient id="gradient-bar-5" y1="2" x2="96.33" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#D3A8E0"/>
                    <stop offset="1" stopColor="#E2B1C5"/>
                </linearGradient>
                <linearGradient id="gradient-bar-6" y1="2" x2="96.33" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#E2B1C5"/>
                    <stop offset="1" stopColor="#EEAA95"/>
                </linearGradient>
            </defs>
            <line className="gradient-line" x1="2" y1="2" x2="94.33" y2="2"/>
        </svg>
        </>
    );
  }
}

export default GradientBar;
