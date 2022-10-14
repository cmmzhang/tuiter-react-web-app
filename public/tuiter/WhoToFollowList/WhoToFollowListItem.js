const WhoToFollowListItem = (who) => {
    return(`
          <li class="list-group-item">
            <div class="row">
                <div class="col-3">
                    <img class="float-start rounded-pill" src="${who.avatarIcon}" height="50px"/>
                </div>

                <div class="col">
                    <div class="fw-bolder">
                        ${who.userName} <i class="fa fa-circle"></i>
                    </div>
                    <div class="fw-light">
                        @${who.handle}
                    </div>
                </div>
                <div class="col-3">
                    <div class="btn btn-primary btn-block rounded-pill">
                        Follow
                    </div>
                </div>
            </div>
        </li>
`);
}
export default WhoToFollowListItem;