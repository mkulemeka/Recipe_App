import Route from '@ember/routing/route';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('recipe');
  }
});
