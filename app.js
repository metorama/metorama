App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Post = DS.Model.extend({
    title: DS.attr('string'),
    summary: DS.attr('string'),
    content: DS.attr('string'),
    publishDate: DS.attr('date')
});