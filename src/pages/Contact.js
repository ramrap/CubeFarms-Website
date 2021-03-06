import React from 'react'
import styled from 'styled-components'
import Layout from '../components/UI/Layout'
import SingleArrowButton from '../components/Buttons/SingleArrowButton'

const Container = styled.div`
    font-family: "madetommy-light";
`

export default function Contact() {
    const [ name, setName ] = React.useState("")
    const [ email, setEmail ] = React.useState("")
    const [ msg, setMsg ] = React.useState("")
    return(
     
            <Container>
                <div className="py-10 px-2 px-lg-5">
                    <div className="row no-gutters justify-content-between py-1 py-lg-5 px-2 px-lg-5">
                        <div className="col-12 col-lg-5">
                            <div className="font-12">
                                <h1 className="heading-bold mb-5">
                                    Contact Us
                                </h1>
                                <p className="mb-4">
                                Write to us today to know more about our business and how we can help you grow your business.

                                </p>
                                <p>
                                Drop us a line at - support@spirited.ai
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <h4 className="mb-4">Fill out the form</h4>
                            <div>
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" className="form-control form-input" value={name} onChange={(event) => setName(event.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Email Address" className="form-control form-input" value={email} onChange={(event) => setEmail(event.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" placeholder="Message" className="form-control form-input" value={msg} onChange={(event) => setMsg(event.target.value)} rows={4} />
                                    </div>
                                    <div className="form-group text-center font-14">
                                        <SingleArrowButton>
                                            Send Message
                                        </SingleArrowButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-black py-5">
                    <div className="mini-hero-container container-lg">
                        <div class="w-100">
                            <h1 className="heading-bold mb-5">
                                We are here for you!<br />
                                Say Hi!
                            </h1>
                            <div>
                                <div className="row no-gutters justify-content-center text-center">
                                    <div className="col-12 col-md-3 mb-4 mb-lg-0">
                                        <h3 className="mb-3">
                                            Our Services
                                        </h3>
                                        <p>
                                            Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                        </p>
                                        <div>
                                            <SingleArrowButton>
                                                Join Now
                                            </SingleArrowButton>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mb-4 mb-lg-0">
                                        <h3 className="mb-3">
                                            Join Spirited.AI
                                        </h3>
                                        <p>
                                            We have some open positions for you!
                                        </p>
                                        <div>
                                            <SingleArrowButton>
                                                Join Now
                                            </SingleArrowButton>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mb-4 mb-lg-0">
                                        <h3 className="mb-3">
                                            Anything else
                                        </h3>
                                        <p>
                                            contact@spirited.com<br />
                                            +91-324324234234
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             */}
            </Container>
 
    )
}