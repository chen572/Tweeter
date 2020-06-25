const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts())

$('#post').click(() => {
    const postText = $('#input').val();
    
    tweeter.addPost(postText);
    renderer.renderPosts(tweeter.getPosts());
    
    $('#input').val('');
});

$('#posts').on('click', '.delete', event => {
    const postID = $(event.currentTarget).closest('.post').data().id;
    
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts());
});

$('#posts').on('click', '.post-comment', event => {
    const commentText = $(event.currentTarget).siblings('input').val();
    const postID = $(event.currentTarget).closest('.post').data().id;
    
    tweeter.addComment(commentText, postID);
    renderer.renderPosts(tweeter.getPosts());
});

$('#posts').on('click', '.delete-comment', event => {
    const commentID = $(event.currentTarget).closest('.comments').data().id;
    const postID = $(event.currentTarget).closest('.post').data().id;

    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts());
})