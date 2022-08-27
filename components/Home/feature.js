import React from 'react';
import Image from "next/image";

export default function Feature(props) {

    const featureData =[
        {icon:"/images/features/bulb.svg",data:"Modern,easy to use interface"},
        {icon:"/images/features/cloud.svg",data:"Cloud based"},
        {icon:"/images/features/time.svg",data:"No rabbit hole"},
        {icon:"/images/features/gurd.svg",data:"Administrative control"},
        {icon:"/images/features/support.svg",data:"24/7 Support"},
    ]


    return (
        <div className={"features-container"}>
            <div className={"container"}>
                <h3 className={"features-heading"}>Our Features</h3>

                <div className={"row"}>
                    <div className={"col-6"}>
                    {featureData.map((data,index)=>(<div key={index} className={"d-flex align-items-center p-5 pb-0"}>
                        <div className={"features-box"}>
                            <Image src={data.icon} height={"36px"} width={"20px"}/>
                        </div>
                        <p className={"default-txt"}>{data.data}</p>
                    </div>))}
                    </div>
                    <div className={"col-6 d-flex flex-column justify-content-center"}>

                        <div className={"color-gray"}>
                            We provide <span className={"txt-theme"}>simple & clean </span> theme for our<br/>
                            site. Each and every user will feel <span className={"txt-theme"}>great </span><br/>
                            <span className={"txt-theme"}>user experience </span> in our product.
                        </div>
                        <div>
                            <Image src={"/images/features/discuss.svg"} height={"500px"} width={"500px"}/>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}
