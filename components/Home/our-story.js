import React from 'react';

export default function OurStory(props) {
    return (
        <div className={"features-container"}>
            <div className={"container"}>
                <h3 className={"features-heading mb-5"}>Our Story</h3>

                <div>
                    <div className={"story-image-container img-story-01"}>
                        <img src={"/images/story/01.jpg"} width={"100%"} />
                    </div>

                    <div className={"row"}>
                        <div className={"col-md-4 mt-3 p-3"}>
                            <div className={"story-image-container img-story-02"}>
                                <img src={"/images/story/02.jpg"}/>
                            </div>
                        </div>
                        <div className={"col-md-4 mt-3 p-3"}>
                            <div className={"story-image-container img-story-02"}>
                                <img src={"/images/story/02.jpg"}/>
                            </div>
                        </div>
                        <div className={"col-md-4 mt-3 p-3"}>
                            <div className={"story-image-container img-story-02"}>
                                <img src={"/images/story/02.jpg"}/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

