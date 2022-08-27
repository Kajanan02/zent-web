import React from 'react';
import Script from "next/script";
import MetaData from "../MetaData";
import Header from "./header";
import Navbar from "./navbar";
import Feature from "./feature";
import WhatYouGet from "./WhatYouGet";



function Home(props) {
    return (
        <>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <Script
                id="nav-visible"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                         $(function () {
                         $("#nav-visible").css({ display: 'none' }) 
                            // $(window).height();.
                            if(document.documentElement.clientHeight >= window.innerHeight){
                                                       $("#nav-visible").css({ display: 'block' }) 

                           }
                           $(document).scroll(function () {
                           // if(document.documentElement.clientHeight >= window.innerHeight){
                           //                             $("#nav-visible").css({ display: 'block' }) 
                           //
                           // }
                            // $("#nav-visible").css({ display: 'block' }) 
                               // $nav.hide();
                               // $nav.toggleClass("nav-next", $(this).scrollTop() > 3)
                               // $nav.toggleClass('nav-next', $(this).scrollTop() > $nav.height());
                               // $nav.toggleClass('nav-next', $(this).scrollTop() > $nav.height());
                           })
                       });
                       $(function () {
                           var $burger = document.querySelector(".burger-container"),
                               header = document.querySelector(".nav-default")
 
                           $burger.onclick = function () {
                               header.classList.toggle("menu-opened")
                           }
                       });
                    `,
                }}
            />
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
            {/*<Header />*/}
        </>
    );
}

export default Home;