// Disable featured posts on other posts
let isPost;
let FeaturedPosts;
isPost = document.getElementsByClassName("post-view");
  if (isPost = 0) {
    FeaturedPosts = document.getElementsByClassName("FeaturedPost");
    for (let i = 0; i < Features.length; i++) {
      Features[i].style.display = "none";
    }
}
