import React from "react";
import "./index.css";
import PostList from "../post-list";

const HomeComponent = () => {
    return(
        <div className="row mt-2">
            <div className="col-10 col-lg-10 col-xl-10">
                <PostList/>
            </div>
            {/*<div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
            {/*    <PostSummaryList/>*/}
            {/*</div>*/}
        </div>
    );
};
export default HomeComponent;