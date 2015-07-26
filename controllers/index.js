App.IndexController = Ember.ArrayController.extend({
    publishDate: function () {
        return this.filterBy('publishDate').slice(0,3);
    }.property('@each.publishDate'),
});