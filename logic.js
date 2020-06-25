const Tweeter = () => {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ];

    let postIdCounter = _posts.length;

    let commentIdCounter = _posts[0].comments.length + _posts[1].comments.length;

    const getPosts = () => _posts;

    const addPost = text => {
        postIdCounter++;

        _posts.push({
            text: text,
            id: `p${postIdCounter}`,
            comments: []
        });
    };

    const removePost = postID => {

        for (let post of _posts) {
            if (post.id == postID) {
                _posts.splice(_posts.indexOf(post), 1);
            }
        }
    };

    const addComment = (text, postID) => {
        commentIdCounter++;

        for (let post of _posts) {
            if (post.id == postID) {
                const postIndex = _posts.indexOf(post);

                _posts[postIndex].comments.push({
                    id: `c${commentIdCounter}`,
                    text: text
                });
            }
        }

    };

    const removeComment = (postID, commentID) => {

        for (let post of _posts) {
            if (post.id == postID) {
                
                for (let comment of post.comments) {
                    if (comment.id == commentID) {
                        const postIndex = _posts.indexOf(post);
                        const commentIndex = _posts[postIndex].comments.indexOf(comment);

                        _posts[postIndex].comments.splice(commentIndex, 1);
                    }
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
};