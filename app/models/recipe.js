import Model from '@ember-data/model';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  link: DS.attr('string'),
  created: DS.attr('string', {
    defaultValue: function () {
      return new Date();
    },
  }),
});
