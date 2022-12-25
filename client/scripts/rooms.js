// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  retrieveFrom: function() {
    return Rooms._data;
  },

  currentRoomName: 'lobby',

  addTo: function(data) {
    const roomSet = new Set();
    for (const item of data) {
      roomSet.add(item.roomname);
    }
    Rooms._data = roomSet;
  },

  addSingleRoom: function(room) {
    Rooms._data.add(room);
  }

};