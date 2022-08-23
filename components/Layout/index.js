import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Script from 'next/script'

export default function Layout() {
    return (
        <div>
            <Script
                id="sta"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                       $(function () {
                           $(document).scroll(function () {
                               var $nav = $(".nav-default")
                               // var $llogo = $(".light");
                               // var $dlogo = $(".dark");
                               $nav.toggleClass("nav-next", $(this).scrollTop() > 3)
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
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}