import Ember from 'ember';

var Ref = new window.Firebase("https://blinding-inferno-9810.firebaseio.com/");


var auth = Ember.Object.extend({
  authed: false,
  username: '',
  init: function() {
    this.authClient = new window.FirebaseSimpleLogin(Ref, function(error, gitUser) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (gitUser) {
        this.set('authed', true);
        this.set('username',gitUser.username);
      } else {
        this.set('authed', false);
      }
    }.bind(this));
  },

  logout: function() {
    this.authClient.logout();
        this.set('authed', false);
  }
});


export default {
  name: 'Auth',

  initialize: function( container, app ) {
        app.register('auth:main', auth, {singleton: true});
        app.inject('controller', 'auth', 'auth:main');
        app.inject('route', 'auth', 'auth:main');

  }
};
