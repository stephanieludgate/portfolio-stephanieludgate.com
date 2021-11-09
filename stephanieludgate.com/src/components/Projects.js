import React, { Component } from 'react';

import SquiggleSVG from '../icons/squiggle';
import ProjectContent from '../project-content';
import IconReactSVG from '../icons/lang-react';
import IconJavaScriptSVG from '../icons/lang-javascript';
//import IconPhpSVG from '../icons/lang-php';
//import IconCsharpSVG from '../icons/lang-csharp';
//import IconPythonSVG from '../icons/lang-python';
import GradientBar from '../icons/gradient-bar';
import IndependentProjectSVG from '../icons/project-independent';
import CourseProjectSVG from '../icons/project-course';
import OpenCodeSVG from '../icons/open-link';
import MarkupSVG from '../icons/markup';

class Projects extends Component {

    render() {
      
        console.log(ProjectContent[0]);
        const projects = ProjectContent;
        projects.map((project, key) => (
            console.log(project.name)
        ));
      
    return (
        <section id="projects" className="">
            <div className="container py-5">
                <h3>
                    <SquiggleSVG />
                    Some of my <span className="cursive-font px-1">projects</span>.
                </h3>             
                <div className="row" id="project-cards">
                    <div className="col-12">
                        <p className="general-font">Below are some of my projects.  More to come soon...</p>
                    </div>

                    {projects.map((project, key) => (
                
                    <div className="col-12 col-md-4 test" key={key}>
                        <div className="custom-card p-0 mb-3">
                        
                            <div className="card-top" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/'+project.coverImg+'.png'})`, backgroundPosition: `center top` }}></div>

                            <div className="card-icon">
                                <GradientBar/>

                                {project.langIcon === 'react' && (
                                    <IconReactSVG/>
                                )}
                                {project.langIcon === 'javascript' && (
                                    <IconJavaScriptSVG/>
                                )}  
                            </div>

                            <div className="card-bottom">
                                <div className="project-title mb-2">{project.name}</div>
                                <div className="general-font mb-2">{project.description}</div>

                                {project.type === 'Independent' && (
                                    <IndependentProjectSVG/>
                                )}
                                {project.type === 'Course' && (
                                    <CourseProjectSVG/>
                                )}
                                <span className="project-details">{project.type}</span><br/>

                                <MarkupSVG/>
                                <span className="project-details">{project.language}</span>
                                <a href={""+project.github+""} className="primary-btn open-code-btn" target="_blank" rel="noopener noreferrer">
                                    Code
                                    <OpenCodeSVG/>
                                </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
  }
}

export default Projects;