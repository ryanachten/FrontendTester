const QuestionItem = Backbone.Model.extend({

  validate: function (attrs) {
    // Ensure question attribute is specified when model is instantiated
    if (!attrs.key) {
      return 'key attribute needs to be specified';
    }
    if (!attrs.type) {
      return 'type attribute needs to be specified';
    }
    if (!attrs.question) {
      return 'question attribute needs to be specified';
    }
  }

});
