// src/components/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// import StickyCircleImage from './components/StickyCircleImage';
// import Content from './components/Content';


// import About from './About';
// import Features from './Features';
// import Reviews from './Reviews';
// import Footer from './Footer';


function App() {
    return (
        <div className="page-wrap">
            <Header />
            <HeroSection />
            {/* <StickyCircleImage />
            <Content /> */}
            
            {/* ... other sections ... */}
            {/* <About />
            <Features />
            <Reviews />
            <Footer /> */}
        </div>
    );
}

export default App;