App.AboutController = Ember.Controller.extend({
	isPictureShowing: false,
	actions: {
		showRealName: function(){
			alert("Dracula's real name is Prince Vlad III 'The Impaler'.");
		},
		showPicture: function(){
			this.set('isPictureShowing', true);
		},
		hidePicture: function(){
			this.set('isPictureShowing', false);
		}
	}
});