import React, { Component } from 'react';

import Questions from '../random-questions';
import SquiggleSVG from '../icons/squiggle';
import IconRefreshSVG from '../icons/refresh';

class About extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            random: 1,
            styleSequence: 2,
            style: 'refresh-qa-1',
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    min = 1;
    max = 10;

    componentDidMount() {
        this.setState({random: Math.floor(this.min + (Math.random() * (this.max - this.min)))});
    }
    
    handleClick() {
        if(this.state.random < this.max) {
            this.setState({random: (this.state.random)+1})
        }
        else {
            this.setState({random: 1});
        }
        
        if(this.state.styleSequence < 5) {
            this.setState({styleSequence: (this.state.styleSequence)+1})
        }
        else {
            this.setState({styleSequence: 1});
        }
        
        this.setState({style: ('refresh-qa-' + this.state.styleSequence)});
    };

  render() {
      
    const questionAnswer = Questions.find(questionAnswer => questionAnswer.id === this.state.random);
      
    return (
        <section id="about">
            <div className="container py-5">
                <h3>
                    <SquiggleSVG />
                    A little more about <span className="cursive-font px-1">me</span>.
                </h3>
                <div className="row">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <p className="general-font">
                            After eight years of working in the retail industry, I decided to pivot and go back to school.  I left my job, moved home to Montreal (pre-COVID) and enrolled myself in a college program for web development.  The world changed <strong>a lot</strong> while I was in school.  While my timeline was definitely affected, I’m so glad to have made that decision when I did!
                        </p>
                        <p className="general-font mb-4">
                            I have since returned to Toronto, where I live downtown, and I am looking for work opportunities as a Web Developer.  I am particularly interested in React and ASP.NET web applications, although I am super open to working with (and learning) different programming languages/frameworks.  My goal is to work towards being a Full-Stack Developer - there is still so much I want to learn!
                        </p>
                        <div className="text-center text-md-left">
                            <a href="http://www.linkedin.com/in/stephanie-ludgate" className="primary-btn" target="_blank" rel="noopener noreferrer">
                                Go To LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 m-auto">
                        <div className="bubble  mt-3 mt-md-0">
                            <div className="qa-question">
                                {questionAnswer.question}
                            </div>
                            <span className="general-font">
                                {questionAnswer.answer}
                            </span>
                            <div id="refresh-qa" onClick={this.handleClick} className={this.state.style}>
                                <IconRefreshSVG/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
  }
}

export default About;