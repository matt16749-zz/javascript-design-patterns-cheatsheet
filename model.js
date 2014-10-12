// MVC and MVP is made up of three components.
  // Model: Manages data of an application. Does not care about presentation or what data to pass on to view.
  // When a model is updated, it will typically notify its observers (usually views)
  // The actual task of updating the model belongs to the controller
var Photo = Backbone.Model.extend({
  // defaults and initialize are keys being added to the Model object literal.
  defaults: {
    src: "placeholder.jpg",
    caption: "A default image",
    viewed: false
  },

  initialize: function(){
    this.set({
      "src": this.defaults.src
    });
  }
});

// Sometimes MVC/MV javascript frameworks group models together. In Backbone.js this is a "collection"
// Managing models in groups allows us to write application logic that listens for any model in the collection be changed.
var PhotoGallery = Backbone.Collection.extend({
  // model, viewed, and unviewed are keys in Collection object literal 
  model: Photo,
  viewed: function(){
    return this.filter(function(photo){
      return photo.get('viewed');
    });
  },
  unviewed: function(){
    return this.without.apply(this, this.viewed());
  }
})