// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = { // responsible for the data part of messages. This is Model

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieveFrom: function() {
    return Messages._data;
  },

  addTo: function(data) {
    Messages._data.push(...data);
  }
};
