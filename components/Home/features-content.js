import React from 'react';
import Image from "next/image";

export default function FeaturesContent(props) {

    const featuresContentData=[
        {icon:"/images/msg.svg",heading:"Excellence",content:"We believe in excellence. We push ourselves and everybody working with us to strive for excellence."},
        {icon:"/images/person.svg",heading:"Collaboration",content:"We value collaboration within the team and with all our members at Zent.App"},
        {icon:"/images/shield.svg",heading:"Integrity",content:"We believe that integrity is important to do anything great. So, it is at the core of all our hearts at Zent.App"},
    ]

    return (
        <div className={"features-container"}>
            <div className={"container"}>
                <div className={"text-center default-txt"}>
                    We work to help create experiences that are more informed and <br/>personalized to <span className={"txt-theme"}> support learning, teaching, and leading</span> more <br/> effectively. And we do this through our combined product and <br/>solution offerings that span the full learning journey.<br/>
                    But enough about us.
                    <p className={"txt-theme"}> “Teach the way that students love”.</p>
                </div>


                <div className={"row"}>
                    {featuresContentData.map((data,index)=>(<div key={index} className={"col-md-4"}>
                        <div className={"features-content-box mx-auto"}>
                            <div className={"round-box"}>
                                <Image src={data.icon} height={"40px"} width={"40px"}/>
                            </div>
                            <div className={"features-content-heading"}>{data.heading}</div>
                            <div className={"color-gray f-16 mt-1"}>
                                {data.content}
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
}

