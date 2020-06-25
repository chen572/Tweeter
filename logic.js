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
        // postIdCounter--;

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
        // commentIdCounter--;

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

// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}