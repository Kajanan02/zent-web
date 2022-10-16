import React from "react";
import { useRouter } from "next/router";
import MetaData from "../components/MetaData";

export default function Page404() {
    const history = useRouter()

    return (
        <div>
            <MetaData
                title={`Zent - Class Management System`}
                description={`web app simple, online, collaborative and user friendly to create a safe and private environment which connects teachers with their 
                students and their peers, all within one platform. It is a closed learning ecosystem. 1+ Years, 1+ Client.`}
                // image={``}
                url={`https://www.zent.app/`}
            />
            <section className={"container justify-content-center d-flex position-relative"}>
                <div className="d-flex-column justify-content-center">
                    <div className={"oops"}>
                        {`OOPS !`}
                    </div>
                    <div className={"txt-404"}>
                        {`We can't seem to find the page that you're looking for`}
                    </div>
                    <div className={"mt-5 p-10"}>
                        <div className="cursor-pointer" onClick={() => history.push("/")}>{`Back To Home`} </div>
                    </div>
                </div>
                <div className={"text-center"}>
                    <img src={"/images/404.webp"} alt={`error`} className={"img-404"} />
                </div>
            </section>
        </div>
    )
}
