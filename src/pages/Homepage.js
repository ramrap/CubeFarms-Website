import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import WhyChooseUs from '../components/OutSource/WhyChooseUs'
import OurStandards from '../components/OutSource/OurStandards'
import OurServices from '../components/OutSource/OurProcess'
import StaticSidePanelSection from '../components/StaticSidePanelSection'
import LookingForSomethingElse from '../components/OutSource/LookingForSomethingElse'

import AOS from 'aos';
import { AnimatedBg, Transition } from 'scroll-background';
import { PRIMARY, PRIMARY_DARK } from '../utils/Colors'
import { FaQuoteLeft } from 'react-icons/fa'
import Footer from '../components/Footer/Footer'

const Container = styled.div`
    .grey-dash {
        display: inline-block;
        height: 4px;
        width: 50px;
        margin-bottom: 3px;
        border-radius: 3px;
        background: grey;
    }
`

export default function Outsource(){
    React.useEffect(() => {
        if(window){
            AOS.init({
                duration: 1400,
            })
        }
    } ,[])
    return (
        <Container>
            <div className="bg-black">
                <div className="container">
                    <Header white full />
                </div>
            </div>
            <div>
                <AnimatedBg>
                    <div className="hero-container">
                        <div className="container">
                            <div className="p-3" style={{maxWidth: "600px"}}>
                                <h1 className="font-39 text-white">
                                    We are<br />
                                    your on Demand<br />
                                    <span style={{color: PRIMARY_DARK}}>Creative</span> Team
                                </h1>
                                <div className="font-13" style={{color: "rgba(245,245,245,0.83)", fontFamily: "madetommy-light"}}>
                                    We design and develop with a belief that every website deserves to 
                                    have its own voice. We build each and every website from scratch 
                                    combining function, content structure, and beauty in a single package.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-5">
                        <div className="row no-gutters align-items-center justify-content-around container-lg mx-auto">
                            <div className="col-12 col-lg-6 p-3 text-muted font-14 heading">
                                Cubefarms is a full stack digital agency working remotely with clients to provide compelling solutions through
                            </div>
                            <div className="col-12 col-lg-5 p-3 font-2 text-left  heading-bold" style={{color: PRIMARY}}>
                                Strategy. Design.<br />
                                Content. Technology.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 px-3 px-lg-5">
                            <div className="font-21 heading text-white">
                                Why choose Us?
                            </div>
                        </div>
                    </div>
                    <div className="hero-container bg-white text-black">
                        <div className="py-5">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 p-3">

                                </div>
                                <div className="col-12 col-lg-6 p-3">
                                    <div className="heading font-32">
                                        Creative Services
                                    </div>
                                    <div className="heading font-18 text-muted py-3">
                                        Good design is good business. Out team of expert creative directors deliver high end designs which complement your brand, product and services.
                                    </div>
                                    <div className="text-muted font-weight-bold">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div className="py-5">
                                        <div>
                                            Explore
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-container">
                        <div className="py-5">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 p-3">

                                </div>
                                <div className="col-12 col-lg-6 p-3">
                                    <div className="heading font-32 text-white">
                                        Web Studio
                                    </div>
                                    <div className="heading font-18 text-muted py-3">
                                        The internet is a virtual world. We help business to design, develop and manage websites that stand out and communicate clearly in this virtual world.
                                    </div>
                                    <div className="text-muted font-weight-bold">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div className="py-5">
                                        <div>
                                            Explore
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-container bg-white text-black">
                        <div className="py-5">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 p-3">

                                </div>
                                <div className="col-12 col-lg-6 p-3">
                                    <div className="heading font-32">
                                        Digita Advertising
                                    </div>
                                    <div className="heading font-18 text-muted py-3">
                                        We use a data driven transparent approach to achieve your online objectives. Our digital branding services have proven to increase traggic, conversions and revenue.
                                    </div>
                                    <div className="text-muted font-weight-bold">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div className="py-5">
                                        <div>
                                            Explore
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-container">
                        <div className="py-5">
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6 p-3">

                                </div>
                                <div className="col-12 col-lg-6 p-3">
                                    <div className="heading font-32  text-white">
                                        Product design
                                    </div>
                                    <div className="heading font-18 text-muted py-3">
                                        We work with startups and brands to create amazing MVPs, app prototypes and custom apps. Pair with our expert product designers for a user centric product.
                                    </div>
                                    <div className="text-muted font-weight-bold">
                                        <div className="grey-dash"></div> Corporate Design, Logo Design, Professional Motion Graphics, Product label Design
                                    </div>
                                    <div className="py-5">
                                        <div>
                                            Explore
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-container bg-white text-black">
                        <div className="py-5 heading">
                            <div style={{maxWidth: "1000px"}}>
                                <div className="font-3 heading-bold">
                                    Inspiring the<br />
                                    <span style={{color: PRIMARY}}>remote working culture</span>
                                </div>
                                <div className="py-5 font-2">
                                    Here at Cubefarms we are making work from home a reality. All you need is laptop, Wi-Fi and sheer dedication towards your job
                                </div>
                                <div className="font-weight-bold font-15">
                                    The future of work is here
                                </div>
                                <div className="">
                                    <div>
                                        Join us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-container text-white">
                        <div className="py-5 heading text-center">
                            <div style={{maxWidth: "1000px"}}>
                                <div className="font-3 heading-bold">
                                    Our client stories
                                </div>
                                <div className="py-5">
                                    <FaQuoteLeft size="76" color={PRIMARY_DARK} />
                                </div>
                                <div className="py-5 font-18">
                                    Here at Cubefarms we are making work from home a reality. All you need is laptop, Wi-Fi and sheer dedication towards your job
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition height="0px" from="#000000" to="#ffffff" />
                </AnimatedBg>
            </div>
            <div>
                <Footer />
            </div>
        </Container>
    )
}