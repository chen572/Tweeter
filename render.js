const Renderer = () => {
    const renderPosts = posts => {
        $('#posts').empty();

        for (let post of posts) {
            const postDiv = $(`<div class="post" data-id="${post.id}"></div>`)
            postDiv.append(`<div class="post-text"><i class="fas fa-trash-alt delete"></i>  ${post.text}</div>`);
            const commentsCont = $(`<ul class="comments"></ul>`)

            for (let comment of post.comments) {
                commentsCont.append(`<div data-id="${comment.id}" class="comments"><span class="delete-comment">X</span>  ${comment.text}</div>`);
            }
            commentsCont.append('<input type="text" placeholder="Type in a comment"><button class="post-comment">Comment</button>')

            postDiv.append(commentsCont);

            $('#posts').append(postDiv);
        }
    }

    return {
        renderPosts
    }
};