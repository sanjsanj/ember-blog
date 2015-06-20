import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  firebase: new window.Firebase('https://<your firebsae>.firebaseio.com/')
});
