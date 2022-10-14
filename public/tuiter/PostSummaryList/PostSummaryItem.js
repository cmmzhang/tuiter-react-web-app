const PostSummaryItem = (post) => {
    return(`
         
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div class="text-secondary">
                                ${post.topic}
                            </div>
                            <div>
                                ${post.userName} <i class="fa fa-circle text-white"></i><span class="text-secondary"> ${post.time}</span>
                            </div>
                            <div class="fw-bolder wd-min-width">
                                ${post.title}
                            </div>
                        </div>
                        <div class="col-4">
                            <img class="float-end rounded wd-rounded-size" src="${post.image}" height="100px"/>
                        </div>
                    </div>
                </li>
        

     `);
}
export default PostSummaryItem;