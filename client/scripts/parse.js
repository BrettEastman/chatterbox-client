// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = { // Parse is entry point to the app. Look for the fetch. Where it all starts - Lets get this data and let's display it.

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) { // once we have enough functionality on site, try create, this is the heart of the assignment. The callback is super important. First really big intro to callbacks.
    // Post request is when user sends information to a URL - opposite of GET
    // TODO: send a request to the Parse API to save the message
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      },
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server, // sending request to this url
      type: 'GET',
      data: { order: '-createdAt' }, // sends data to the server, object looks at it and specifies the order. In JQuery docs.
      contentType: 'application/json', // it specifies the type of the content in this request. In this case, this data is expected to be in application/JSON. We're sending a file that has been run through JSON.stringify() so the receiver will parse it. It doesn't have to be JSON, it could be whatever type we want to send the data in so they can interpret it correctly
      success: successCB, // a function to be called if the request succeeds. Passed three arguments, but most likely we'll only be using the first one. So you know when you received the data, or not. Because this is all asynchronously happening, this lets us know. Otherwise, it would trigger the error callback. The response code lets us know if it invokes success callback (number in the 200's) or an error cb if it's another number (such as 404 error).
      error: errorCB || function(error) { // if no errorCB provided, it defaults to null, then the or operator calls the default function with the error as an argument. Ajax will be sending back that information
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }
};


// probably the parse is Controller

// the resourse is something you would get when you go to HTTP:// location. You would click a button, and it might make the call for you? A get
