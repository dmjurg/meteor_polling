Meteor.startup(function() {
  if (Polls.find().count() === 0) {

    var samplePolls = [
      {
        question: 'Which pizza topping is best?',
        choices: [
          { text: 'Just cheese', votes: 0 },
          { text: 'Pepperoni', votes: 0 },
          { text: 'The works', votes: 0 }
        ]
      },
      {
        question: 'How much is that doggy in the window?',
        choices: [
          { text: '$100', votes: 0 },
          { text: '$250', votes: 0 },
          { text: 'Free puppy!', votes: 0 }
        ]
      }
    ];

    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });
  }
});
