import React from 'react'
import Image from "next/image";

export default function Header() {
    const logo = "/images/zent-logo.svg"
    return (

        <div className={"d-flex vh-100"}>
            <div className={"flex-50"}>
                <div className={"header-container"}>
                    <Image src={logo} width={'47px'} height={'47px'}/>
                    <div className={"header-sub-container"}>
                        <h1 className={"header-heading"}>The Ultimate <br/>
                            Class Management<br/>
                            Platform</h1>
                        <h2 className={"header-sub-txt"}>We provide <span
                            className={"txt-theme"}>best</span> educational <br/>
                            platform for <span className={"txt-theme"}> students & teachers. </span></h2>

                        <button className={"btn header-btn bg-theme"}>
                            Start learning now
                        </button>
                    </div>
                </div>
            </div>
            <div className={"video-container"}>
                <video autoPlay muted={true} loop id="myVideo">
                    <source
                        src={
                            "https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
                        }
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>

    )
}
