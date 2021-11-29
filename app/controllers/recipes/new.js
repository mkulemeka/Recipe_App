import Controller from '@ember/controller';

export default Ember.Controller.extend({
  actions: {
    addRecipe: function () {
      var self = this;
      var randomID = Math.floor((Math.random() * 1000) + 1);
      var newRecipe = this.store.createRecord('recipe', {
        title: this.recipeTitle,
        description: this.recipeDescription,
        image: this.recipeImage,
      });

      newRecipe.save();

      self.setProperties({
        title: '',
        description: '',
        image: '',
      });
    },
  },
});
