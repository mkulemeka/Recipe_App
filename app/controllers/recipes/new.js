import Controller from '@ember/controller';

export default Ember.Controller.extend({
    actions: {
        addRecipe: function () {
            var self = this;
            var newRecipe = this.store.createRecord('recipe', {
                title: this.get('recipeTitle'),
                description: this.get('recipeDescription'),
                image: this.get('recipeImage')
            });

            this.transitionTo('recipes')
        }
    }
})
