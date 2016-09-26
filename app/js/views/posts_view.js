const PostsView = Backbone.View.extend({
  initialize () {
    this.views = [];
    this.listenTo(this.collection, 'sync', this.initializeSubviews.bind(this));
    this.listenTo(this.model, 'change', this.render.bind(this));
  },

  initializeSubviews () {
    this.views = this.collection.map(function (post) {
      return new PostView({ model: post })
    });

    this.render();
  },

  render () {
    const page = this.model;
    const posts = this.views.slice(page.start(), page.end())

    this.$el.empty();
    posts.forEach(function (view) {
      this.$el.append(view.render().el);
      view.setElement(view.el);
    }, this);

    return this;
  }
});