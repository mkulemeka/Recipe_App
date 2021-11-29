import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'recipes.json?jsonp=?',
  shouldReloadAll() {
    return true;
  },
});
