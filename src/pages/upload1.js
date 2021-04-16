import React from 'react'
import styled from 'styled-components'
import { useAuth } from "../context/auth";
import { loadFirebase } from "../context/firebase";
import { useState } from 'react';
import Header from '../components/Header/Header'
import WhyChooseUs from '../components/OutSource/WhyChooseUs'
import OurStandards from '../components/OutSource/OurStandards'
import OurServices from '../components/OutSource/OurProcess'
import StaticSidePanelSection from '../components/StaticSidePanelSection'
import LookingForSomethingElse from '../components/OutSource/LookingForSomethingElse'

import AOS from 'aos';
import { AnimatedBg, Transition } from 'scroll-background';
import Layout from '../components/UI/Layout'

const Container = styled.div`
    .heading {
        font-size: 2.6rem;
    }
`
const whyChooseUsData = [
    {
        image: "/static/advertising/choose1.png",
        content: "We provide one-month free support and train you to tackle your new digital tool."
    },
    {
        image: "/static/advertising/choose1.png",
        content: "We use open source scripts and libraries so that you can keep full ownership of the project."
    },
    {
        image: "/static/advertising/choose1.png",
        content: "Our development team uses the best technologies to create high-performance, cost-efficient, flexible web experience."
    },
    {
        image: "/static/advertising/choose1.png",
        content: "*7"
    },
]
const ourProcessData = [
    {
        title: "Market research",
        icon: "/static/advertising/process1.png",
        content: "We take a comprehensive approach across your industry trends, competitors, and target audience. We conduct market research to understand your digital potential and make strategic decisions"
    },
    {
        title: "Collaborate",
        icon: "/static/advertising/process1.png",
        content: "You know your business the best and we are experts at our work. At this stage, we collaborate with you to discuss your objectives and set short term and long term goals"
    },
    {
        title: "Strategy",
        icon: "/static/advertising/process1.png",
        content: "With research, data and industry knowledge, we develop multi-channel marketing strategies with your goals and objectives in mind"
    },
    {
        title: "Execute",
        icon: "/static/advertising/process1.png",
        content: "From creating SEO friendly content to strategically curated campaigns, and everything in between. We execute our strategy to connect your brand with the targeted audience"
    },
    {
        title: "Optimize",
        icon: "/static/advertising/process1.png",
        content: "The digital world is constantly changing. That's why we take a smart approach to digital advertising. With which we adjust our strategy and implement new findings to improve your ROI"
    }
]

export default function Outsource(){
    React.useEffect(() => {
        if(window){
            AOS.init({
                duration: 1400,
            })
        }
    } ,[])
    const { setFirebaseUser, token, setToken } = useAuth()
    const [image , setImage] = useState(null)
    const [url , setUrl] = useState(null)
    const [progress, setProgress] = useState(0)
    const [imageUpload,setImageUpload] = useState(false)

    


    const handleSignIn = async () => {
        var firebase = await loadFirebase();
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        provider.addScope('profile');
        firebase.auth().signInWithPopup(provider)
          .then(() => {
            console.log("login success")
            setToken(true)
          })
          .catch(err => {
            alert('Error Processing request, try again.');
            console.log(err);
          });
      }

      const handleChange = e => {
          if(e.target.files[0]){
            setImage(e.target.files[0]);
          }
      };
      const handleUpload = () => {
            setImageUpload(true)
            // let firebase = loadFirebase()
            // const storage = firebase.storage();
            // const uploadTask = storage.ref(`images/${image.name}`).put(image)
            // uploadTask.on(
            //     "state_changed",
            //     snapshot => {
            //         const progress = Math.round(
            //             (snapshot.bytesTransferred/ snapshot.totalBytes) *100
            //         );
            //         setProgress(progress)
            //     },
            //     error => {
            //         console.log(error);
            //     },
            //     ()=>{
            //         storage
            //             .ref("images")
            //             .child(image.name)
            //             .getDownloadURL()
            //             .then(url =>{
            //                 console.log("url of image => ",url)
            //                 setUrl(url)
            //             })
            //     }
            // )
    };

    
    return (
        <Layout header={{white: true,full: true}}>
            <Container>
                <div className="background-fade">
                    <AnimatedBg>
                        <div className="hero-container">
                            <div className="container text-black">
                                <div className="p-3" style={{maxWidth: "600px"}}>
                                    <h1 className="font-39">
                                        Upload<br />
                                        Image<br />
                                        
                                    </h1>
                                    <div className="font-13" style={{ fontFamily: "madetommy-light"}}>
                                       
                                    </div>
                                        <div className="p-2">
                                        <input type="file" onChange={handleChange}/>
                                        </div>
                                       
                                        <br/>
                                        <button className=" btn btn-primary" onClick ={handleUpload}>Upload</button>
 

                                </div>
                                <div className="font-13 text-success p-2" style={{ fontFamily: "madetommy-light"}}>
                                       {imageUpload?<>
                                       Image Uploaded Succesfully!!
                                       </>:<>
                                       </>}
                                    </div>
                            </div>
                        </div>
                        
                    </AnimatedBg>
                </div>
            </Container>
        </Layout>
    )
}