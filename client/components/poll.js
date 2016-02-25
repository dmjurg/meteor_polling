// attach events to poll Template
Template.poll.events({

  // event to handle clicking a choice
  'click .vote': function(event) {

    // prevent default behavior
    event.preventDefault();

    // get parent(poll) id
    var pollID = $(event.currentTarget).parent('.poll').data('id');
    var voteID = $(event.currentTarget).data('id');

    // creating incrementing object to add to vote
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;

    // increment number of votes for choice
    Polls.update(
      { _id: pollID },
      { $inc: action }
    );
  }
});
