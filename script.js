/*
    Facebook Wall Purger
    ----------------------------
    Author: Deneb Garza
    ----------------------------
    Automatically delete Facebook wall content simply by 
    scrolling down your wall.
*/

// do not modify
var doneCount = 0;
var posts;
var contextMenus;
var previousPosts = 0;

var POST_CLASS_NAME = '_5pbj';
var INTERVAL = 1000;

window.onscroll = function() {
    posts = document.getElementsByClassName(POST_CLASS_NAME);
    // only invoke a new batch if the previous one is done
    if(doneCount >= previousPosts && previousPosts < posts.length) {
        console.log("Starting new batch" + previousPosts + " - " + posts.length);

        deletePosts(previousPosts, posts.length);
        previousPosts = posts.length;
    } 
}


/* delete's a range of posts */
function deletePosts(start, end) {
    var timer = setInterval(function() {
        
        deletePost(posts[start]);

        start++;
        doneCount++;

        if(start == end) {
            clearInterval(timer);
        }

    }, INTERVAL);

}

/* deletes a single post given the clickable element */
function deletePost(post) {
    console.log("Deleting post");

    post.click();

    var menus = document.getElementsByClassName('uiContextualLayer');
    console.log(menus);
}