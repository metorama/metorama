App.PostController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function(){
			this.set('isEditing', true);
		},
		save: function(){
			this.set('isEditing', false);
		},
		delete: function(){
			if(confirm('Are You Sure!!!')) {
				this.get('model').destroyRecord();
				this.transitionToRoute('posts');
			}
		}
	}
});