// Disable featured posts on other posts
let isPost;
let FeaturedPosts;
isPost = document.getElementsByClassName("post-view");
if (isPost.length > 0) {
  FeaturedPosts = document.getElementsByClassName("FeaturedPost");
  for (let i = 0; i < FeaturedPosts.length; i++) {
      FeaturedPosts[i].style.display = "none";
  }
}
