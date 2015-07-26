Ember.Handlebars.registerBoundHelper('truncate', function(text, options){
  var limit = options.hash.limit || 140;
  if (text.length > limit){
    text = text.substr(0, limit - 3) + " ...";
  return text;
  }
});
