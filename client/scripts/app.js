// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

// Probably in the Controller category

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10); // accesses the name at the username property and assigns it whatever is at the window.location.search property (just first 10 characters)

    FormView.initialize(); // FormView is an object (functional instantiation constructor) in the View category which houses all the message form functionality. When the initialize method is invoked, it selects the form element and, on submit, it calls the FormView.handleSubmit function and does what will be coded in
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    console.log('Messages: ', Messages);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      Messages.addTo(data);
      MessagesView.render();
      Rooms.addTo(data);
      RoomsView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
