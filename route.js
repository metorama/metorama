App.Router.map(function() {
	this.resource('posts');
	this.resource('post', {path: '/posts/:post_id'});
	this.route('about', { path: '/about' });
});

App.Router.reopen({
  location: 'history'
});