// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {  // Parse is entry point to the app. Look for the fetch. Where it all starts - Lets get this data and let's display it.

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {  // once we have enough functionality on site, try create, this is the heart of the assignment. The callback is super important and might need to call help desk. Look for parse.readall. First really big intro to callbacks. Where the hell is the success callback and how does it work?
    // TODO: send a request to the Parse API to save the message
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server, // sending request to this url
      type: 'GET', // don't need to make get, but check to make sure its functioning accurately. See the JQuery docs for more info. There are others such as 'POST' and we will probably need both
      data: { order: '-createdAt' }, // sends data to the server, object looks at it and specifies the order. In JQuery docs.
      contentType: 'application/json',  // it specifies the type of the content in this request. In this case, this data is expected to be in application/JSON. We're sending a file that has been run through JSON.stringify() so the receiver will parse it. It doesn't have to be JSON, it could be whatever type we want to send the data in so they can interpret it correctly
      success: successCB, // a function to be called if the request succeeds. Passed three arguments, but most likely we'll only be using the first one. So you know when you received the data, or not. Because this is all asynchronously happening, this lets us know. Otherwise, it would trigger the error callback. The response code lets us know if it invokes success callback (number in the 200's) or an error cab if it's another number (such as 404 error).
      error: errorCB || function(error) {  // if no errorCB provided, it defaults to null, then the or operator calls the default function with the error as an argument. Ajax will be sending back that information
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

  // Post request is when user sends information to a URL - opposite of GET

};


// probably the parse is Controller

// the resourse is something you would get when you go to HTTP:// location. You would click a button, and it might make the call for you? A get

// // The Parse object represents your connection to outside world!
// // Or... just the Parse API. Populate this object with methods
// // which send requests to the RESTful Parse API.

// var Parse = {

//   server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

//   create: function() {
//     // TODO: send a request to the Parse API to save the message
//     console.log('I am in create');
//     // $.ajax({
//     //   type: 'POST',
//     //   url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/rfp',
//     //   data: 'This is a sample string',
//     //   success: function() {console.log('Achieved success')},
//     //   dataType: 'text'
//     // });
//     $.ajax({
//       // This is the url you should use to communicate with the API server.
//       url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/rfp',
//       type: 'POST',
//       data: JSON.stringify({
//         username: 'shawndrost',
//         text: 'trololo',
//         roomname: '4chan',
//       }),
//       contentType: 'application/json',
//       success: function () {
//         console.log('chatterbox: Message sent');
//       },
//       error: function (data) {
//         // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//         console.error('chatterbox: Failed to send message');
//       },
//     });

//   },

//   // $.ajax({
//   //   type: "POST",
//   //   url: url,
//   //   data: data,
//   //   success: success,
//   //   dataType: dataType
//   // });

//   readAll: function(successCB, errorCB = null) {
//     $.ajax({
//       url: Parse.server,
//       type: 'GET',
//       data: { order: '-createdAt' },
//       contentType: 'application/json',
//       success: function(data) {
//         console.log('successful get request');
//         console.log(data);
//         console.log(Messages);
//         console.log('done');
//         Messages.data = data;
//         console.log(Messages.data);
//       },
//       error: function() {
//         console.log('chatterbox: Failed to fetch messages');
//       }
//     });
//   }

// };