import React, { useEffect } from 'react';
import Routing from './router/Routing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from 'react-animated-cursor';
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-260491160-1';
ReactGA.initialize(TRACKING_ID);

const App = () => {
  // this for animation
  useEffect(() => {
    // Initialize Google Analytics and track page view on component mount
    ReactGA.pageview(window.location.pathname + window.location.search);

    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <AnimatedCursor
        innerSize={6}
        outerSize={24}
        color='255, 160, 1'
        outerAlpha={0.25}
        innerScale={0.7}
        outerScale={1.2}
      />
      <Routing />
    </div>
  );
};

export default App;
