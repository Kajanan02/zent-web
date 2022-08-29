import React from 'react';

export default function StayUpDate(props) {
    return (
        <div className={"container text-center"}>
            <div className={"stayUpdate-container"}>
                <div className={"features-heading"}>Stay up to date</div>
                <div className={"f-16 color-gray"}>Share your email with us and we will help keep you updated with our
                    company and industry news
                </div>
                <div className={"row"}>
                    <div className={"col-9"}>
                        <input  type="email" placeholder={"Your email address"} className="email-input form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className={"col-3"}>
                        <button  type="email" className="btn btn-submit" id="exampleInputEmail1" aria-describedby="emailHelp">Sign up </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

