// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  addUsernameData: function(data) {
    for (const item of data) {
      if (Friends._data[item.username] === undefined) {
        Friends._data[item.username] = false;
      }
    }
  },

  toggleStatus: function(friend) {
    Friends._data[friend] = !Friends._data[friend];
  },

  getCurrentFriends: function() {
    var friendList = [];
    for (var key in Friends._data) {
      if (Friends._data[key] === true) {
        friendList.push(key);
      }
    }
    return friendList;
  }
};