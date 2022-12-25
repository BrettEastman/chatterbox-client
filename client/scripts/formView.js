// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'), // this means it is getting the 'form' element in the html. Now we can add submit handlers, basically adding stuff to that element. SO we can just call $form, then we can do whatever we want.

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit); // does all the set up.
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // var data = Messages.retrieveFrom();
    // console.log('data: ', data);

    var submitObj = {};
    submitObj.text = $('input#message').val();
    submitObj.username = App.username;
    submitObj.roomname = Rooms.currentRoomName;
    console.log(Rooms.currentRoomName);
    console.log('submitObj: ', submitObj);
    // console.log(event);

    Parse.create(submitObj);

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
