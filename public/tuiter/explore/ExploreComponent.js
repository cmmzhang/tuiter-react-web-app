import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-10">
                    <div class="position-relative">
                        <input class="ps-2 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <i class="position-absolute wd-search-tuiter fa fa-search fa-1x wd-color-gray wd-margin-left"></i>
                    </div>
                </div>
                <div class="col-2">
                    <i class="fa fa-cog fa-2x float-end text-primary"></i>
                </div>
            </div>

            <ul class="nav nav-tabs mt-1 ">

                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>

            <div class="position-relative">
                <img src="../../images/Starship.jpg" width="100%"/>
                <h4 class="position-absolute bottom-0 left-0 wd-margin-left text-dark">
                    SpaceX's Starship
                </h4>
            </div>
            
            ${PostSummaryList()}
    
    `);
}

export default ExploreComponent;