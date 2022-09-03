import React from 'react';
import MetaData from "../MetaData";
import Header from "./header";
import Navbar from "./navbar";
import Feature from "./feature";
import WhatYouGet from "./WhatYouGet";
import FeaturesContent from "./features-content";
import OurStory from "./our-story";
import ClientThoughts from "./client-thoughts";
import StayUpDate from "./stayUpDate";
import Footer from "./footer";


function Home(props) {

    // const [show,setShow]=useState(false);
    //
    // const controlNavbar = ()=>{
    //     console.log(window.screenY)
    //     if(window.scrollY>window.innerHeight){
    //         setShow(true)
    //     }else {
    //         setShow(false)
    //     }
    // }
    //
    // useEffect(()=>{
    //
    //     window.addEventListener('scroll',controlNavbar)
    //
    //     return()=>{
    //         window.removeEventListener('scroll',controlNavbar)
    //     }
    //
    // },[])


    return (
        <>
            <MetaData
                title={`Zent - Class Management System`}
                description={`web app simple, online, collaborative and user friendly to create a safe and private environment which connects teachers with their 
        students and their peers, all within one platform. It is a closed learning ecosystem. 1+ Years, 1+ Client.`}
                // image={``}
                url={`https://www.zent.app/`}
            />

            <Header />
            <Navbar/>
            <Feature/>
            <WhatYouGet/>
            <FeaturesContent/>
            <ClientThoughts/>
            <OurStory/>
<StayUpDate/>
                <Footer/>
            {/*<Header />*/}
        </>
    );
}

export default Home;