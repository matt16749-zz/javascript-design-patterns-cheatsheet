// Views are a visual representation of the Model. Think of the each View as a seperate page in the DOM.
// A view will typically observe a model and when the model changes, the view will change.
// Typically Users interact with views to change attributes of the model.
// The actual task of updating the model belongs to the controller.

var buildPhotoView = function(photoModel, photoController){
  var base = document.createElement('div'),
      photoE1 = document.createElement('div');

  base.appendChild(photoE1);

// render function is responsible for displaying the contents of photoModel to User.
  var render = function(){
    // The _.template comes from Underscore.js library
    photoE1.innerHTML = _.template('photoTemplate',{src: photoModel.getSrc()});
  }

// The subscriber on photoModel is to update the view as the photoModel changes. (photoModel is publisher. View will be the subscriber)
  photoModel.addSubscriber( render );

  photoE1.addEventListener('click', function(){
    photoController.handleEvent('click', photoModel);
  });

  var show = function(){
    photoE1.style.display = '';
  }

  var hide = function(){
    photoE1.style.display = 'none'
  }

  return {
    showView: show,
    hideView: hide
  }
}