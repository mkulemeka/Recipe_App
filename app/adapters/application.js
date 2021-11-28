import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'recipes.json?jsonp=?',
  shouldReloadAll() {
    return true;
  },
});

// import JSONAPIAdapter from '@ember-data/adapter/json-api';

// export default class ApplicationAdapter extends JSONAPIAdapter {}
