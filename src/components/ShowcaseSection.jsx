import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = React.useRef(null)
    const project1Ref = React.useRef(null)
    const project2Ref = React.useRef(null)
    const project3Ref = React.useRef(null)

    const project = [project1Ref.current, project2Ref.current, project3Ref.current]

    
    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    
        const project = [project1Ref.current, project2Ref.current, project3Ref.current];
    
        project.forEach((card, index) => {
            if (card) { // Check if card is not null
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 0.1 * (index + 1),
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom-=100",
                        }
                    }
                );
            }
        });
    }, []);
    


  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='rounded-lg cursor-pointer'><a href="https://rospandfinovate.netlify.app/">
                        <img src="/images/project1.png" alt="Ryde" className='h-auto rounded-lg' />
                        </a>
                    </div>
                    <div className='text-content'>
                        <h2 className=''>Accounts Management System</h2>
                        <p className='text-white-50 md:text-xl'> 
                        A full-featured business accounting software built using the MERN stack (MongoDB, Express.js, React.js, Node.js) designed for financial transparency and operational efficiency. This project helps small to medium-sized businesses manage their complete financial operations from a single dashboard.
                        </p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='project-list-wrapper overflow-hideen'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb] cursor-pointer' ><a href='https://fooddelivery-mern-app-frontend.onrender.com'>
                            <img src="/images/project2.png" alt="Ryde" />
                            </a>
                        </div>
                        <h2>QuikeBite (Food Delivery App)</h2>
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'><a href="">
                            <img src="/images/project3.png" alt="Ryde" />
                            </a>
                        </div>
                        <h2>Medcash (Insurance Claim Management)</h2>
                    </div>
                </div>

            </div>

        </div>
      
    </section>
  )
}

export default ShowcaseSection
 