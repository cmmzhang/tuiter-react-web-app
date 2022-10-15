import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return (`
          <ul class="list-group">
            ${posts.map(item => {
        return(PostItem(item));
    }).join('')
    }
          </ul>
                      
`)
}

export default PostList;