// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = { // responsible for all the visual interaction

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    // Render _all_ the messages.
    MessagesView.$chats.html('');
    var messages = Messages.retrieveFrom();

    messages.filter((item) => {
      return (item.username !== null || item.text !== null);
    }).forEach((message) => {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    // Render a single message.
    var currFriends = Friends.getCurrentFriends();
    // console.log(currFriends);
    if (currFriends.includes(message.username)) {
      // console.log('here')
      var htmlMessage = MessageView.render({username: message.username, message: message.text, friend: ' friend'});
      MessagesView.$chats.append(htmlMessage);
    } else {
      var htmlMessage = MessageView.render({username: message.username, message: message.text, friend: ''});
      MessagesView.$chats.append(htmlMessage);
    }
  },

  handleClick: function(event) { // this is an example of the Controller
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // console.log('event', event);
    var currentFriend = $(this).text();
    // $(this).addClass('friend');

    Friends.toggleStatus(currentFriend);

    // for (var prop in Friends._data) {
    //   if (Friends._data[prop] === true) {

    //   }
    // }
    // $( ".username" ).each(function( i ) {
    //   if ( $(this).text() === currentFriend) {
    //     $(this).addClass('friend');
    //   }
    // console.log(Friends.getCurrentFriends());
    MessagesView.render();
  }
};