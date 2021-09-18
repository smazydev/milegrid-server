let buildMakeUser = function (userValidator) {
    return ({name,userID,avatar,rights} = {}) => {
        let {error} = userValidator({name,userID});
        if (error) throw new Error(error);

        return {
            getName: () => name,
            getUserID: () => userID,
            getAvatar: () =>  avatar,
            getRight: () => rights,
        }
    }
}

module.exports = buildMakeUser;