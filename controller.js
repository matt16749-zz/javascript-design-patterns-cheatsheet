// Controllers act as intermediaries between model and view. 
// Responsible for 2 things: 
  // updating the view when model changes
  // updating the model when User changes view

// Backbone doesn't have an actual Controller, rather the task of controller is split between the Router and View.
// In this case, you can consider Backbone.js to be MV, not MVC.

var PhotoRouter = Backbone.Router.extend({
  routes: {"photos/:id": "route"},

  route: function(id){
    var item = photoCollection.get(id);
    var view = new PhotoView({model: item});

    something.html(view.render().el);
  }
});
