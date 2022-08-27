import React from 'react';
import Image from "next/image";

export default function Navbar(props) {


    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    // console.log(window.innerHeight)


    return (
        <div className={"navbar-container"} id={"nav-visible"}>
            {/*<nav className="navbar navbar-light bg-light">*/}
            {/*    <div className="container">*/}

            {/*    </div>*/}
            {/*</nav>*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div>
                        <a className="navbar-brand" href="#"><Image className={"mt-1 overflow-visible"} src={"/images/zent-nav.svg"} width={'120px'} height={'30px'}/></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center gap-38" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className={"btn header-btn bg-theme"}>
                           Login
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    );
}

