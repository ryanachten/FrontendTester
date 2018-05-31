const QuestionItemsView = Backbone.View.extend({

  initialize: function (options) {
    // Ensure question collection is passed when view is instantiated
    if (!(options && options.model)) {
      throw new Error('questions view requires a collection');
    }
  },

  render: function () {
    const self = this;
    this.model.each(function (item) {
      const view = new QuestionItemView({model: item});
      self.$el.append(view.render().$el);
    });

    return this;
  }
});
