
import Link from 'next/link'; 
import { useEffect } from 'react';

const InnerArea = () => {

  return (
    <>

      {/* <!-- inner area start --> */}
      <div className="tp-inner-area tp-inner-bg pt-170 pb-120 black-bg-2 fix">
        <div className="panels p-relative fix">
          <div className="panels-container d-flex">
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/about" target="_blank">
                <div className="tp-inner-thumb" 
                style={{ backgroundImage: "url(/assets/img/inner/inner-1.jpg)" }}></div>
              </Link>
            </div>
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/service" target="_blank">
                <div className="tp-inner-thumb" 
                style={{ backgroundImage: "url(/assets/img/inner/inner-4.jpg)" }}></div>
              </Link>
            </div>
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/service-details" target="_blank">
                <div className="tp-inner-thumb" 
                style={{ backgroundImage: "url(/assets/img/inner/inner-5.jpg)" }}></div>
              </Link>
            </div>
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/portfolio" target="_blank">
                <div className="tp-inner-thumb" 
                style={{ backgroundImage: "url(/assets/img/inner/inner-2.jpg)" }}></div>
              </Link>
            </div>
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/portfolio-details" target="_blank">
                <div className="tp-inner-thumb" 
                 style={{ backgroundImage: "url(/assets/img/inner/inner-3.jpg)" }}></div>
              </Link>
            </div>
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/blog-sidebar" target="_blank">
                <div className="tp-inner-thumb" 
                style={{ backgroundImage: "url(/assets/img/inner/inner-7.jpg)" }}></div>
              </Link>
            </div>
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/blog-details" target="_blank">
                <div className="tp-inner-thumb"
                style={{ backgroundImage: "url(/assets/img/inner/inner-8.jpg)" }}></div>
              </Link>
            </div>
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/blog" target="_blank">
                <div className="tp-inner-thumb" 
                style={{ backgroundImage: "url(/assets/img/inner/inner-6.jpg)" }}></div>
              </Link>
            </div>
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/blog-details-2" target="_blank">
                <div className="tp-inner-thumb" 
                style={{ backgroundImage: "url(/assets/img/inner/inner-9.jpg)" }}></div>
              </Link>
            </div>
            <div className="panel">
              <Link href="https://diego-next-js.vercel.app/contact" target="_blank">
                <div className="tp-inner-thumb" 
                style={{ backgroundImage: "url(/assets/img/inner/inner-10.jpg)" }}></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- inner area end --> */}
    </>
  );
};

export default InnerArea;