const PostModel = Backbone.Model.extend({
  parse (response = {}) {
    return response.data;
  },

  upvote () {
    this.set('score', this.get('score') + 1)
  },

  downvote () {
    this.set('score', this.get('score') - 1)
  }
});