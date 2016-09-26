const PostsCollection = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://www.reddit.com/r/javascript.json',

  parse (response = {}) {
    return response.data.children;
  }
});