import React from "react";

const PostItem = (
    {
        post = {
            "profile": "nasa.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "title1": "Amazing show about",
            "titleBlue": "@Inspiration4x",
            "title2": "mission!",
            "image": "astronaut.jpg",
            "number1": "4.2k",
            "number2": "3.5K",
            "number3": "37.5K",
            "paragraphTitle": "Countdown: Inspiration4 Mission to Space | Netflix Office Site",
            "paragraph": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space..."

        }
    }
) => {
    return(
        <>
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <img className="float-start rounded-circle" src={`/images/${post.profile}`} height="50px"/>
                </div>
                <div className="col-10">

                    <div className="">
                        {post.userName} <i className="fa fa-check-circle text-white"></i><span className="text-secondary"> @{post.handle} . {post.time}</span><i className="float-end text-secondary fa fa-ellipsis-h"></i>
                    </div>
                    <div className="fw-bolder wd-min-width">
                        {post.title1} <span className="text-primary">{post.titleBlue}</span> {post.title2}
                    </div>

                    <div className="pt-2">
                        <img width={400} className="rounded wd-rounded-size" src={`/images/${post.image}`}/>
                    </div>
                </div>

            </div>

        </li>

        <div className="text-white">
            {post.paragraphTitle}
            <p className="text-secondary">{post.paragraph}</p>
        </div>

        <div className="pt-2">
            <a className="wd-icons" href="#"><i className="fas fa-comment"></i><span
                className="wd-margin-left">{post.number1}</span></a>
            <a className="wd-icons wd-icon-margin" href="#">&#x2610;<span
                className="wd-margin-left">{post.number2}</span></a>
            <a className="wd-icons wd-icon-margin" href="#">&#x2661;<span
                className="wd-margin-left">{post.number3}</span></a>
            <a className="wd-icons wd-icon-margin" href="#"><i className="fa fa-upload"></i></a>
        </div>
        </>


     );
};
export default PostItem;