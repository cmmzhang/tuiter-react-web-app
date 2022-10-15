const PostItem = (post) => {
    return(`
                <li class="list-group-item">
                    <div class="row">
                        <div class="col">
                            <img class="float-start rounded-circle" src="${post.profile}" height="50px"/>
                        </div>
                        <div class="col-10">
       
                            <div class="">
                                ${post.userName} <i class="fa fa-check-circle text-white"></i><span class="text-secondary"> @${post.handle} . ${post.time}</span><i class="float-end text-secondary fa fa-ellipsis-h"></i>
                            </div>
                            <div class="fw-bolder wd-min-width">
                                ${post.title1} <span class="text-primary">${post.titleBlue}</span> ${post.title2}
                            </div>
                            
                              <div class="pt-2">
                                <img class="rounded wd-rounded-size" src="${post.image}" height="200px" width="90%"/>
                            </div>
                        </div>
                      
                    </div>
     
                </li>
                
                <div class="text-white">
                    ${post.paragraphTitle}
                    <p class="text-secondary">${post.paragraph}</p>
                 
                </div>
                     
                   <div class="pt-2">
                        <a class="wd-icons" href="#"><i class="fas fa-comment"></i><span class="wd-margin-left">${post.number1}</span></a>
                        <a class="wd-icons wd-icon-margin" href="#">&#x2610;<span class="wd-margin-left">${post.number2}</span></a>
                        <a class="wd-icons wd-icon-margin" href="#">&#x2661;<span class="wd-margin-left">${post.number3}</span></a>
                        <a class="wd-icons wd-icon-margin" href="#"><i class="fa fa-upload"></i></a>
                   </div>
        

     `);
}
export default PostItem;