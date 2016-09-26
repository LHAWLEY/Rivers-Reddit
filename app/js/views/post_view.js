const PostView = Backbone.View.extend({
  tagName : 'div',

  initialize () {
    this.listenTo(this.model, 'change', this.render)
  },

  events: {
    'click .up.arrow': 'upvote',
    'click .down.arrow': 'downvote'
  },

  upvote () {
    this.model.upvote()
  },

  downvote () {
    this.model.downvote()
  },

  template (post) {
    return (
      `<section class='post'>
        <section class='votes'>
          <div class='arrow up'></div>
          <p class='count'>${post.score}</p>
          <div class='arrow down'></div>
        </section>
        <section class='content'>
          <a href='${post.url}' class='post_title'>${post.title}</a>
          <p>submitted by ${post.author}</p>
        </section>
      </section>`
    )
  },

  render () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});