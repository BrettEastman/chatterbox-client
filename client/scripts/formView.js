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

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// // FormView is an object which houses all the message form functionality.
// // Consider the provided code and complete the functionality.
// // Apply what you learn here to other interactive views if necessary.

// var FormView = {

//   $form: $('form'), // this means it is getting the 'form' element in the html. Now we can add submit handlers, basically adding stuff to that element. SO we can just call $form, then we can do whatever we want.

//   initialize: function() {
//     FormView.$form.on('submit', FormView.handleSubmit); // does all the set up.
//   },

//   handleSubmit: function(event) {
//     // Stop the browser from submitting the form
//     event.preventDefault();

//     console.log('I have submitted');
//     // console.log(typeof this);
//     // console.log(this.('#message').value);


//     // TODO: Currently, this is all handleSubmit does.
//     // Make this function actually send a message to the Parse API.

//     Parse.create(() => {
//       // examine the response from the server request:
//       console.log('I have returned this value');
//       console.log(data);

//       // TODO: Use the data to update Messages and Rooms
//       // and re-render the corresponding views.
//     });
//     // console.log('I am after Parse');
//     console.log('click!');
//   },

//   setStatus: function(active) {
//     var status = active ? 'true' : null;
//     FormView.$form.find('input[type=submit]').attr('disabled', status);
//   }

// };