import React, { Component } from 'react';

import SquiggleSVG from '../icons/squiggle';
import IconProgrammingSVG from '../icons/ipd-programming';
import IconDatabaseSVG from '../icons/ipd-database';
import IconApplicationSVG from '../icons/ipd-application';
import IconDesignSVG from '../icons/ipd-design';
import IconFoundationsSVG from '../icons/ipd-foundations';
import BadgeMTASVG from '../images/badge-mta';
import BadgeGAIQSVG from '../images/badge-gaiq';

class Experience extends Component {

  render() {

    return (
        <section id="skills">
            <div className="container py-5">
                <h3>
                    <SquiggleSVG />
                    Accreditations and <span className="cursive-font px-1">proficiencies</span>.
                </h3>
                <p className="general-font">Having completed the coursework towards my AEC in &apos;Internet Programming and Development&apos;, I am currently looking for work opportunities in downtown Toronto as a Web Developer.  The IPD program at John Abbott College is a full-time program that runs for a year, and is composed of seventeen courses.  The courses can be best summarized by the following topic breakdown:</p>
        
                <div className="row">
        
                    <div className="col-xs-12 col-md-4 col-lg text-center ipd-col">
                        <IconFoundationsSVG />
                        <div className="my-2 topic">Web Foundations</div>
                        <p className="general-font">Introduction to computer science, HTML, XML, CSS and  JavaScript (including JSON & jQuery)</p>
                    </div>
            
                    <div className="col-xs-12 col-md-4 col-lg text-center ipd-col">
                        <IconDesignSVG />
                        <div className="my-2 topic">Web Design</div>
                        <p className="general-font">Design principles, user experience and Bootstrap, with a focus on responsive design</p>
                    </div>
                    
                    <div className="col-xs-12 col-md-4 col-lg text-center ipd-col">
                        <IconProgrammingSVG />
                        <div className="my-2 topic">Programming</div>
                        <p className="general-font">Programming fundamentals, OOP and dependency injections (focus on Java and C#)</p>
                    </div>
        
                    <div className="col-xs-12 col-md-4 offset-md-2 offset-lg-0 col-lg text-center ipd-col">
                        <IconDatabaseSVG />
                        <div className="my-2 topic">Data</div>
                        <p className="general-font">MySQL & MSSQL, integrating databases with programming languages and data structures</p>
                    </div>
        
                    <div className="col-xs-12 col-md-4 col-lg text-center ipd-col">
                        <IconApplicationSVG />
                        <div className="my-2 topic">Web Applications</div>
                        <p className="general-font">Full-stack web applications in C#, Java and PHP, as well as mobile applications (android)</p>
                    </div>
                </div>
                                                                                                             
                <div className="row py-0 py-md-4" id="recent-activity">
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <hr className="d-md-none"/>
                        <h5>Recent Activity</h5>
                        <p className="general-font">
                        In addition to this college program, I have earned the following badges:
                        </p>
                        <div className="row" id="badge-row">
                            <div className="col-6 col-md-4 col-lg-3">
                                <a href="https://www.credly.com/badges/f7ce4a4d-e2bf-4256-b17c-a5bf5260af86/public_url" id="badge-mta" className="badges" target="_blank" rel="noopener noreferrer">
                                    <BadgeMTASVG/>
                                </a>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <a href="https://www.credly.com/badges/f7ce4a4d-e2bf-4256-b17c-a5bf5260af86/public_url" id="badge-gaiq" className="badges d-none" target="_blank" rel="noopener noreferrer">
                                    <BadgeGAIQSVG/>
                                </a>
                            </div>
                        </div>
                    </div> 
                    <div className="col-12 col-md-6 order-1 order-md-2" id="skills-breakdown">
                        <hr className="mt-0 d-md-none"/>
                        <h5>Languages</h5>
                        <p className="general-font">
                            HTML &#8226; XML &#8226; CSS &#8226; JavaScript  &#8226; SQL &#8226; Java &#8226; C# &#8226; PHP
                        </p>
                        <h5>Frameworks</h5>
                        <p className="general-font">
                            Bootstrap &#8226; React &#8226; ASP.NET &#8226; Spring Boot
                        </p>
                        <h5>Tools</h5>
                        <p className="general-font mb-0">
                            Git &#8226; CI/CD &#8226; AWS &#8226; Adobe Photoshop, Illustrator &amp; XD
                        </p>
                    </div> 
                </div>      
            </div>
        </section>
    );
  }
}

export default Experience;