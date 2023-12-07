'use client';
import Link from 'next/link';
import React from 'react';
import { scroller } from 'react-scroll';



const scrollToDemo = () => {
  scroller.scrollTo('demo', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};

const scrollToFeatures = () => {
  scroller.scrollTo('feature-2', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  });
};



const Header = () => {
  return (
    <>
      <header>
        <div className="tp-header-area tp-transparent tp-header-plr z-index-1 fix">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-3 col-5">
                <div className="tp-header-logo">
                  <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-6 d-none d-md-block">
                <div className="tp-header-menu">
                  <nav>
                    <ul>
                      <li className="smooth">
                        <a style={{ color: "#fff", cursor: 'pointer' }} onClick={scrollToDemo}>Demos</a></li>
                      <li className="smooth">
                        <a style={{ color: "#fff", cursor: 'pointer' }} onClick={scrollToFeatures}>Features</a></li>
                      <li><a href="#" target="_blank">Documentation</a></li>
                      <li><a href="https://help.themepure.net/support/" target="_blank">Support</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-7">
                <div className="tp-header-btn text-end">
                  <a className="tp-btn" href="https://themeforest.net/item/diego-creative-personal-portfolio-resume-next-js-template/49523407?s_rank=1" target="_blank">
                    Buy Now {' '}
                    <span>
                      <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.79895 10.7996H9.81637C12.9163 10.7996 13.3878 8.82611 13.9596 5.94781C14.1246 5.11761 14.207 4.70252 14.0087 4.42597C13.8104 4.14941 13.4302 4.14941 12.6699 4.14941H3.41736"
                          stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M4.79914 10.8002L2.98838 2.06047C2.83462 1.43723 2.282 1 1.64803 1H0.999756"
                          stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" />
                        <path
                          d="M5.40685 10.8003H5.12264C4.18084 10.8003 3.41736 11.6062 3.41736 12.6003C3.41736 12.766 3.54461 12.9003 3.70157 12.9003H11.3615"
                          stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <ellipse cx="6.52631" cy="13.9502" rx="1.0362" ry="1.05002" stroke="currentcolor"
                          stroke-width="1.5" />
                        <ellipse cx="11.3614" cy="13.9502" rx="1.0362" ry="1.05002" stroke="currentcolor"
                          stroke-width="1.5" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;