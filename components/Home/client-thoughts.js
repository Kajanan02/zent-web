import React from 'react';
import Image from "next/image";
import {Slide} from "react-slideshow-image"


export default function ClientThoughts(props) {

    const data = [0, 1, 2, 4, 5]

    return (
        <div className={"container pb-5"}>
            <h3 className={"features-heading my-5"}>Our Features</h3>

            <div className={"slide-container"}>
                <Slide
                    slidesToScroll={1}
                    slidesToShow={3}
                    indicators={true}
                    arrows={true}
                    duration={3000}
                    transitionDuration={3000}

                >
                    {data.map((dat, index) => (<div key={index} className={"testimonial-card"}>
                        <div className={"camma"}>"</div>
                        <div className={"mt-100 px-4 pb-3"}>

                            <div className={"default-txt"}>Always Best</div>
                            <div className={"color-gray mt-2"}>
                                It is a long established fact that a
                                reader will be distracted by the
                                readable content of a page when
                                looking at its layout. The point of
                            </div>
                            <div className={"mt-3"}>
                                <Image src={"/images/avatar.svg"} height={'71px'} width={'71px'}/>
                            </div>
                            <div className={"client-name"}>Jerryluxshigan</div>
                            <div className={"f-16"}>UI/UX Designer at Lizris</div>
                        </div>
                    </div>))}

                </Slide></div>


            {/*{data.map((dat,index)=>(<div className={"testimonial-card"}>*/}
            {/*    <div className={"camma"}>"</div>*/}
            {/*    <div className={"mt-100 px-4 pb-3"}>*/}

            {/*        <div className={"default-txt"}>Always Best</div>*/}
            {/*        <div className={"color-gray mt-2"}>*/}
            {/*            It is a long established fact that a*/}
            {/*            reader will be distracted by the*/}
            {/*            readable content of a page when*/}
            {/*            looking at its layout. The point of*/}
            {/*        </div>*/}
            {/*        <div className={"mt-3"}>*/}
            {/*            <Image src={"/images/avatar.svg"} height={'71px'} width={'71px'}/>*/}
            {/*        </div>*/}
            {/*        <div className={"client-name"}>Jerryluxshigan</div>*/}
            {/*        <div className={"f-16"}>UI/UX Designer at Lizris</div>*/}
            {/*    </div>*/}
            {/*</div>))}*/}

        </div>
    );
}

