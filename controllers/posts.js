App.PostsController = Ember.ArrayController.extend({
	actions: {
		sortByTitle: function(){
			this.set('sortProperties', ['title']);
			sortAscending: true
		},
		sortByDate: function(){
			this.set('sortProperties', ['publisDate']);
		}
	}
})