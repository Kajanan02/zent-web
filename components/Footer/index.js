import React from "react";
// import NewsletterGlobal from "../newsletter-global";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="container">
            <div className="container">
                <div className="col">
                    <h4 className="footer-heads">{`Company`}</h4>
                    <Link href={`/about`}>{`About Us`}</Link>
                    <Link href={`/careers`}>{`Careers`}</Link>
                </div>

                <div className="col">
                    <h4>{`Resources`}</h4>
                    <Link href={`/blogs`}>{`Blogs`}</Link>
                    <Link href={`/news`}>{`News`}</Link>
                    <Link href={`/case-studies`}>{`Case Studies`}</Link>
                </div>

                <div className="col">
                    <h4>{`Our Solution`}</h4>
                    <Link href={`/solutions/solution-1`}>{`Precision Agriculture`}</Link>
                    <Link href={`/solutions/solution-2`}>{`Farmer Management System`}</Link>
                    <Link href={`/solutions/solution-3`}>{`Farm Operations Management Farm`}</Link>
                    <Link href={`/solutions/solution-4`}>{`Financial Management`}</Link>
                </div>

                <div className="col">
                    <h4>{`Partnership`}</h4>
                    <Link href={`/agronomist-portal`}>{`Agronomist Portal`}</Link>
                    <Link href={`/research-collaboration`}>{`Research Collaboration`}</Link>
                </div>
            </div>
            <div >
                <div className="footer-bar">
               <img src={"/senz-agro-logo.svg"} alt={"SenzAgro Logo"} className={"remove-white-img"}/>
                <span>{`© Copyrights 2022 SenzMate Pvt Ltd.`}</span>
                <span>{`By visiting the site, you’re agreeing with the`}
                    <Link href={`/terms-of-use`} passHref ><span className={'footer-terms'}>{` Terms of Service `}</span></Link> {`and`}
                    <Link href={`/privacy-policy`} passHref ><span className={'footer-terms'}>{` Privacy Policy.`}</span></Link>
                </span>
                </div>
            <span className="social-icons">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SenzMate"><img src={'/images/Social-media/facebook.svg'} className={"social-icon-style"} alt="Facebook"/> </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/senzmate-iot-solutions/"><img src={'/images/Social-media/linkedin.svg'} className={"social-icon-style"} alt="LinkedIn"/> </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/senzmate/"><img src={'/images/Social-media/instagram.svg'} className={"social-icon-style"} alt="Instagram"/> </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/SenzMate"><img src={'/images/Social-media/twitter.svg'} className={"social-icon-style"} alt="Twitter"/> </a>
                    </span>
            </div>
        </footer>
    );
}
