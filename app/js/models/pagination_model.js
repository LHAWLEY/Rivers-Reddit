const PaginationModel = Backbone.Model.extend({
  canGoBack () {
    return this.get('current') > 0
  },

  canGoForward () {
    return this.get('current') + this.get('perPage') < this.get('limit');
  },

  next () {
    this.set('current', this.get('current') + this.get('perPage'));
  },

  previous () {
    this.set('current', this.get('current') - this.get('perPage'));
  },

  start () {
    return this.get('current');
  },

  end () {
    return this.get('current') + this.get('perPage');
  }
});