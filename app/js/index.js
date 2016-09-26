$(document).ready(function () {
  const posts = new PostsCollection();

  const pageModel = new PaginationModel({
    perPage: 5,
    current: 0,
    limit: 100
  });

  const timer = new Timer({
    state: 'active',
    duration: 20000
  });

  // Promise (object with a then function) returned passes information to the callback function.
  posts.fetch().then(function () {
    pageModel.set('limit', posts.length);
  });

  const view = new PostsView({
    el: '.posts',
    collection: posts,
    model: pageModel
  });

  const pageView = new PaginationView({
    el: '.pagination',
    model: pageModel
  });

  const overlay = new Overlay({
    el: 'body',
    model: timer
  });

  overlay.render();
});