import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import JoinUsForm from '../components/JoinUsForm'
import StepScroll from '../components/StepScroll'
import Footer from '../components/Footer/Footer'


import { PRIMARY, PRIMARY_DARK } from '../utils/Colors'


const background = '/static/cubeBackground.png'

const Container = styled.div`
    height: 100%;
    .hero {
        height: 100%;
        background: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
    }
    .subheading {
        font-size: 0.4rem;
    }
    .heading {
        font-size: 2.5rem;
    }
   .heading {
        font-weight: bold;

    }
    .subheadingWhite {
        color: white;
        font-size: 1.8rem;
    }
    .form {
        overflow: auto;  
        background: linear-gradient(to bottom,${PRIMARY}, ${PRIMARY_DARK})
    }
    @media(min-width: 992px){
        .outerContainer {
            padding-top: 8px;
            height: calc(100%);
        }
        .outerContainer > div {

        }
        .subheading {
            font-size: 1.8rem;
        }
        .heading {
            font-size: 3.5rem;
        }
    }
`

export default function JoinUs(){
    return (
        <>
        <Container>
            <Header full={true} />
            <div className="row no-gutters outerContainer">
                <div className="col-12 col-lg-6 hero px-2 px-md-5 py-5">
                    <div className="py-10 h-100 d-flex flex-column align-items-center justify-content-left">
                        <div className="heading">Be a part of <strong className="text-blue" style={{color:"#377eeb"}}>Spirited.ai</strong>
                        </div>
                        <div className="subheading Black w-100 py-md-2 align-items-center justify-content-left">
                        We hire people with a broad set of technical skills who are ready to take on some of technology’s greatest challenges, make real-world impact, and learn cool stuff along the way.
                        </div>
                        
                    </div>
                </div>
                <div className="col-12 col-lg-6 form px-3 px-md-5 py-10 py-md-3 d-flex flex-column position-relative">
                    <div className="subheadingWhite w-100 py-md-2">
                    
                    </div>
                    <div className="subheadingWhite w-100">
                        <StepScroll />
                    </div>
                    <div className="w-100 joinusform h-100">
                        <JoinUsForm />

                    </div>
                </div>
            </div>
        </Container>
     
        </>
    )
}