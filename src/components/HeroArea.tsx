'use client';
import React from 'react';
import ServiceArea from './ServiceArea';
import { scroller } from 'react-scroll';
import Link from 'next/link';
import Demo from './Demo';
import FeatureArea from './FeatureArea';
import InnerArea from './InnerArea';
import FeatureTwo from './FeatureTwo';
import ResponsiveArea from './ResponsiveArea';
import Footer from '@/layouts/Footer';


const scrollToFeature = () => {
  scroller.scrollTo('feature', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};



const scrollToDemo = () => {
  scroller.scrollTo('demo', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};




const HeroArea = () => {
  return (
    <>

      {/* <!-- hero area start --> */}
      <div className="tp-hero-area tp-btn-trigger tp-hero-bg p-relative z-index-1 fix"
        style={{ backgroundImage: `url(assets/img/hero/hero-bg.png)` }}>
        <div className="tp-hero-shape-1">
          <img src="/assets/img/hero/hero-shape-1.png" alt="" />
        </div>
        <div className="tp-hero-scoll-wrap smooth d-none d-xl-block">
          <a onClick={scrollToFeature} style={{ cursor: 'pointer' }}>
            <div className="tp-hero-scoll-down d-flex flex-column align-items-center">
              <span className="text">Scroll</span>
              <span>
                <svg width="14" height="73" viewBox="0 0 14 73" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.9997 66.2493C10.1305 66.2493 6.99965 69.2688 6.99965 73.0004"
                    stroke="currentcolor" stroke-width="2" stroke-miterlimit="10" />
                  <path d="M6.99979 73.0004C6.99979 69.2688 3.86891 66.2493 -0.000308406 66.2493"
                    stroke="currentcolor" stroke-width="2" stroke-miterlimit="10" />
                  <path d="M6.99969 0.713135L6.99969 70.7131" stroke="currentcolor" stroke-width="2"
                    stroke-miterlimit="10" />
                </svg>
              </span>
            </div>
          </a>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-hero-title-box">
                <h1 className="tp-hero-title tp-char-animation">
                  All in One <br /> Portfolio Website</h1>
              </div>
              <div className="tp-hero-content-box d-flex align-items-center">
                <div className="tp-hero-btn smooth tp-btn-bounce">
                  <a className="tp-btn-lg" onClick={scrollToDemo} style={{ cursor: 'pointer' }}>See All Demo</a>
                </div>
                <div className="tp-hero-text tp-char-animation-2">
                  <p>Resume / Modern CV & Personal Portfolio <br /> Grid Based HTML Template</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- hero area end --> */}

    </>
  );
};

export default HeroArea;