// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    const rooms = Rooms.retrieveFrom();
    // console.log(rooms);
    for (var room of rooms) {
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append('<option value="' + roomname + '">' + roomname + '</option');
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // alert( this.value );
    Rooms.currentRoomName = this.value;
    // console.log(Rooms.currentRoomName);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var newRoomName = prompt('What is the name of the new room?');
    Rooms.currentRoomName = newRoomName;
    Rooms.add(newRoomName);
    RoomsView.render();
    RoomsView.$select.val(newRoomName).change();
  }
};
