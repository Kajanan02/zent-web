import React from 'react';
import Image from "next/image";

export default function Footer(props) {
    return (
        <div className={"footer"}>
            <div className={"container"}>
                <Image src={"/images/logo-wh.svg"} height={'64px'} width={'200px'}/>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <div className={"footer-heading"}>{`We are Always Innovating`}</div>
                        <div className={"f-16 text-white mt-2"}>{`We’re always improving Zent.App, adding features and
                            capabilities
                            that other platforms haven’t even thought of yet!`}
                        </div>
                        <div className={"footer-heading"}>Keep in touch</div>
                        <div className={"d-flex gap-2 mt-3"}>
                            <Image src={"/images/icons/facebook.svg"} height={"45px"} width={"45px"}/>
                            <Image src={"/images/icons/twitter.svg"} height={"45px"} width={"45px"}/>
                            <Image src={"/images/icons/insta.svg"} height={"45px"} width={"45px"}/>
                            <Image src={"/images/icons/linkedin.svg"} height={"45px"} width={"45px"}/>
                        </div>
                    </div>
                    <div className={"col-md-3"}>    
                        <div className={"ms-md-5"}>
                            <div className={"footer-heading mb-3"}>Company</div>
                            <div className={"text-white f-16"}>About us</div>
                            <div className={"text-white f-16"}>Contact us</div>
                            <div className={"text-white f-16"}>Privcay policy</div>
                            <div className={"text-white f-16"}>Terms & contions</div>
                        </div>
                    </div>
                    <div className={"col-md-3"}>
                        <div className={"footer-col"}>
                            <div className={"footer-heading mb-3"}>Reach us</div>
                            <div className={"text-white f-16"}>www. zent.app</div>
                            <div className={"text-white f-16"}>077-0101101</div>
                            <div className={"text-white f-16"}>career@ zent.app</div>
                        </div>
                    </div>
                </div>

                <hr className={"text-white mt-5"}/>
                <div className={"text-center text-white f-16 py-4"}>All Rights Reserved Zent.App | Designed By : LIZRIS
                    2022
                </div>
            </div>
        </div>
    );
}

