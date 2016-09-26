const Overlay = Backbone.View.extend({
  initialize () {
    this.listenTo(this.model, 'change', this.render.bind(this))
  },

  events: {
    'mousemove': 'resetTimer',
    'keydown': 'resetTimer',
    'scroll': 'resetTimer'
  },

  resetTimer () {
    this.model.reset();
  },

  template (timer) {
    const overlayClass = timer.isIdle() ? 'overlay' : 'hide';

    return (
      `<div class='${overlayClass}'></div>`
    )
  },

  render () {
    this.$el.find('.overlay-container').html(this.template(this.model));
    return this;
  }
});