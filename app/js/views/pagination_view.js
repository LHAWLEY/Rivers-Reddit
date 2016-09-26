const PaginationView = Backbone.View.extend({
  initialize () {
    this.listenTo(this.model, 'change', this.render)
  },

  events: {
    'click .next': 'nextPage',
    'click .prev': 'previousPage'
  },

  nextPage () {
    this.model.next();
  },

  previousPage: function () {
    this.model.previous();
  },

  template (page) {
    const prevClass = page.canGoBack() ? 'prev' : 'hide';
    const nextClass = page.canGoForward() ? 'next' : 'hide';

    return (
      `<div class='${prevClass}'>&#x2039;</div><div class='${nextClass}'>&#x203a;</div>`
    );
  },

  render () {
    this.$el.html(this.template(this.model));
    return this;
  }
});