
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>

        <div className="tp-footer-bg black-bg-2 z-index-1 p-relative fix">
          <div className="tp-footer-bg-shape">
            <img src="/assets/img/footer/footer-bg.png" alt="" />
          </div>
          <div className="tp-footer-area tp-btn-trigger-2 pt-120 pb-150 tp-footer-border pb-150">
            <div className="container">
              <div className="row">
                <div className="tp-footer-area">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-9">
                        <div className="tp-footer-title-box text-center z-index-1">
                          <h4 className="tp-footer-title tp_title_anim">On Sale for a Very Limited Time.</h4>
                          <span className="tp_title_anim">& Make yourself known to the world</span>
                          <div className="tp-btn-bounce-2">
                            <a className="tp-btn-footer" href="https://themeforest.net/item/diego-creative-personal-portfolio-resume-next-js-template/49523407?s_rank=1" target="_blank">
                              Purchase Template
                              <span>
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.88489 13.5992H12.336C16.3218 13.5992 16.9279 11.0619 17.6631 7.3611C17.8752 6.29368 17.9812 5.75998 17.7262 5.4044C17.4712 5.04883 16.9825 5.04883 16.0049 5.04883H4.10852" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" />
                                  <path d="M5.88502 13.6006L3.55685 2.36349C3.35915 1.56216 2.64864 1 1.83352 1H1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" />
                                  <path d="M6.6665 13.6006H6.30107C5.09016 13.6006 4.10852 14.6368 4.10852 15.915C4.10852 16.128 4.27213 16.3007 4.47395 16.3007H14.3227" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                  <ellipse cx="8.10547" cy="17.6499" rx="1.33228" ry="1.35006" stroke="currentcolor" stroke-width="1.5" />
                                  <ellipse cx="14.3225" cy="17.6499" rx="1.33228" ry="1.35006" stroke="currentcolor" stroke-width="1.5" />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-copyright-area tp-copyright-plr">
            <div className="container-fluid">
              <div className="tp-footer-border pt-25 pb-25">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div className="tp-copyright-left text-md-start text-center">
                      <span>© {new Date().getFullYear()}. All rights reserved by <a href="https://themeforest.net/user/theme_pure" target="_blank">ThemePure</a></span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-5">
                    <div className="tp-copyright-right text-center text-md-end">
                      <a href="#" target="_blank">Docs</a>
                      <a href="https://help.themepure.net/support/" target="_blank">Support Center</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;