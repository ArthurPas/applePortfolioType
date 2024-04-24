import {useGSAP} from '@gsap/react'
import React, {useRef} from 'react'
import {animateWithGsap} from '../utils/animations';
import {explore1Img, explore2Img, explore3Img, explore4Img, exploreVideo} from '../utils';
import gsap from 'gsap';

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })

        animateWithGsap('#features_title', {y: 0, opacity: 1})
        animateWithGsap(
            '.g_grow',
            {scale: 1, opacity: 1, ease: 'power1'},
            {scrub: 5.5}
        );
        animateWithGsap(
            '.g_text',
            {y: 0, opacity: 1, ease: 'power2.inOut', duration: 1}
        )
        animateWithGsap(
            '.g_text2',
            {y: 0, opacity: 1, ease: 'power2.inOut', duration: 1}
        )
    }, []);

    return (
        <section className="h-full common-padding bg-zinc relative overflow-hidden">
            <div className="screen-max-wdith">
                <div className="mb-12 w-full">
                    <h1 id="features_title" className="section-heading">Explore my tech school journey.</h1>
                </div>

                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">Bordeaux university's</h2>
                        <h3 className="text-5xl lg:text-7xl font-semibold">Learn the theories.</h3>
                    </div>

                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative h-[50vh] w-full flex items-center">
                            <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center"
                                   preload="none" muted autoPlay ref={videoRef}>
                                <source src={exploreVideo} type="video/mp4"/>
                            </video>
                        </div>

                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container">
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore1Img} alt="titanium" className="feature-video g_grow"/>
                                </div>
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore2Img} alt="titanium 2" className="feature-video g_grow"/>
                                </div>
                            </div>

                            <div className="feature-text-container">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text2">
                                        Its here where i learn most of theorical concept {' '}
                                        <span className="text-white">
                      such as POO, web development, database management, CI/CD,  and lot more.
                    </span>,
                                        by some project and written exams.
                                    </p>
                                </div>

                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text2">
                                        During this two years I almost see every subject in the dev and also in general
                                        tech {' '}
                                        <span className="text-white">
                    such as network, system, security, project management with agile methods, economy law etc.
                    </span>
                                        I also have the opportunity to work with some companies for some project in my
                                        last year internship.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">Epitech MSC</h2>
                        <br></br>
                        <h3 className="text-5xl lg:text-7xl font-semibold">Think by myself</h3>
                    </div>

                    <div className="flex-center flex-col sm:px-10">

                        <div className="flex flex-col w-full relative">
                            <div className="feature-video-container">
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore3Img} alt="titanium" className="feature-video g_grow"/>
                                </div>
                                <div className="overflow-hidden flex-1 h-[50vh]">
                                    <img src={explore4Img} alt="titanium 2" className="feature-video g_grow"/>
                                </div>
                            </div>

                            <div className="feature-text-container">
                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        The learn by project pedagogy from this school allowed me to go deeper in my knowledge {' '}
                                        <span className="text-white">
                      I have the time to apply my knowledge in lots of different projects and learn by myself.
                    </span>{' '}
                                        I also take much pleasure to work with my classmates and help them with what I know and learn from what they know.
                                    </p>
                                </div>

                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        During the three years I also work at partial time as a back-end developera for  {' '}
                                        <span className="text-white">
                                            Credit mutuel Arkéa wich is the head of the bank Crédit mutuel de Bretagne, Crédit mutuel du Sud-Ouest for the most famous subsidiary of my employers
                    </span> {' '}
                                        @Arkea I work on an IT team in charge of all the CRM instances for the big subsidiary of the group.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features