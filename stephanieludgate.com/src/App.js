import React, { Component } from 'react';

import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

class App extends Component {
    render() {
        return (
            <>
                <Navigation />
                <Welcome />
                <Skills />
                <Projects />
                <About />
                <Contact />
                <Footer />
                <ScrollToTop/>
            </>
        );
    }
}

export default App;
