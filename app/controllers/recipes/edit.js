import Controller from '@ember/controller';

export default Ember.Controller.extend({
    actions: {
        editRecipe: function(id){
            var self = this;

            var title = this.get('model.title');
            var description = this.get('model.description');
            var image = this.get('model.image');

            this.store.findRecord('recipe', id, { backgroundReload: false }).then(function(recipe){
                recipe.set('title', title);
                recipe.set('description', description);
                recipe.set('image', image);

                recipe.save();

            });
        }
    }
})
