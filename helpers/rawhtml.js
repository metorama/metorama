Ember.Handlebars.helper('renderHTML', function(value, options) {
  return new Handlebars.SafeString(value);
});