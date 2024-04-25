import React, { useRef } from 'react'
import {imgMoi, resumePdf} from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={imgMoi} alt="Arthur Pascal" width={250} height={250} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Arthur PASCAL
            <br />
          </h2>

          <p className="hiw-subtitle">
            For more techical details, check out my resume
          </p>
          <a href={resumePdf} download="Arthur_Pascal_Dev_CV" className="btn">Resume</a>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <p className="text-gray font-semibold text-center mt-3">TL:DR</p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    Dev full stack with great area of knowledge and curiosity {' '}
                    <span className="text-white">
                      backend expertise
                    </span> {' '}
                  </p>

                  <p className="hiw-text g_fadeIn">
                   Curious about everything, I can also have "less" technical interests such as {' '}
                    <span className="text-white">
                      Exchange with customers, project management and team management.
                    </span>
                     I am always looking for new challenges and love to learn new things from others.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">To contact me </p>
                <p className="hiw-bigtext">arthur@devapascal.fr</p>
                <p className="hiw-text">and here is my  <u><a href="https://www.linkedin.com/in/arthur-pascal33/" className="underline text-blue">LinkedIn</a></u></p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks