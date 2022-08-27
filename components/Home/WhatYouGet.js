import React from 'react';
import Image from "next/image";

export default function WhatYouGet(props) {

    const getData=[
        {img:"/images/get/get01.svg",heading:"Convenient learning format",icon:"/images/get/card01.svg",content:"Online learning format with mentorship from experience teachers."},
        {img:"/images/get/get02.svg",heading:"Learn from the best",icon:"/images/get/card02.svg",content:"Get lessons from great teachers in our country"},
        {img:"/images/get/get03.svg",heading:"Progress meetings",icon:"/images/get/card03.svg",content:"Arrange online meet with parents about student progress"},
    ]


    return (
        <div className={"mt-5 mb-5"}>
            <div className={"container"}>
                <h3 className={"features-heading"}>What will you get?</h3>

                <div>
                    <div className={"row"}>

                        {getData.map((data,index)=>(<div key={index} className={"col-md-4"}>
                            <div className={"get-card"}>
                                <div>
                                    <Image src={data.img} height={"216px"} width={"305px"}/>
                                </div>
                                <div className={"position-relative"}>
                                    <div className={"position-absolute icon-position"}>
                                        <Image src={data.icon} height={"36px"} width={"36px"}/>
                                    </div>
                                    <div className={"pt-3 ps-3 pb-2 pe-2"}>
                                        <div className={"card-heading"}>
                                            {data.heading}
                                        </div>
                                        <p className={"color-gray mt-2"}>{data.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>))}



                    </div>
                </div>
            </div>
        </div>
    );
}

