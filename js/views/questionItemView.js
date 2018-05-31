const QuestionItemView = Backbone.View.extend({

  initialize: function (options) {
    // Ensure question model is passed when view is instantiated
    if (!(options && options.model)) {
      throw new Error('question model needs to be specified');
    }
  },

  render: function () {
    this.$el.html(this.model.get('question'));
    $(this.$el).addClass(this.model.get('section'));
    return this;
  }
});
