const Renderer = () => {
    const renderPosts = posts => {
        $('#posts').empty();

        for(let post of posts) {
            const postDiv = $(`<div class="post"></div>`)
            postDiv.append(`<p data-id="${post.id}" class="post-text">${post.id} ${post.text}</p>`);
            const commentsCont = $(`<ul class="comments"></ul>`)

            for(let comment of post.comments) {
                commentsCont.append(`<p data-id="${comment.id}" class="comments">${comment.id} ${comment.text}</p>`);
            }

            postDiv.append(commentsCont);

            $('#posts').append(postDiv);
        }
    }

    return {
        renderPosts
    }
};