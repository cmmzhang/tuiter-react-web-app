import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import who from "../WhoToFollowList/who.js";

const WhoToFollowList = () => {
    return (`
        <div class="row">
            <div class="col">
                <ul class="list-group">
                    <li class="list-group-item">
                       Who to follow
                    </li>
                        ${who.map(item => {
                                return(WhoToFollowListItem(item));
                            }).join('')
                        }
                </ul>
            </div>
        </div>
`)
}

export default WhoToFollowList;