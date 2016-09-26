const Timer = Backbone.Model.extend({
  initialize (attributes) {
    this.countdown(attributes.duration)
  },

  countdown (duration) {
    this.timer = setTimeout(function () {
      this.elapse();
    }.bind(this), duration);
  },

  isIdle () {
    return this.get('state') === 'idle';
  },

  reset () {
    clearTimeout(this.timer);
    this.set('state', 'active');
    this.countdown(this.get('duration'));
  },

  elapse () {
    this.set('state', 'idle');
  }
});