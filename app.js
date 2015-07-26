App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Post = DS.Model.extend({
	title: DS.attr(),
	description: DS.attr(),
	url: DS.attr(),
	publishDate: DS.attr()
});