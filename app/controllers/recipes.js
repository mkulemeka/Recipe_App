import Controller from '@ember/controller';
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteRecipe: function(id){
            this.store.findRecord('recipe', id).then(function(recipe){
               recipe.deleteRecord();
               recipe.save();
            });
        }
    }
})
