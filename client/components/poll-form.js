Template.pollForm.events({

  // form submission
  'submit form': function(event) {

    // stop form from submitting
    event.preventDefault();

    // get data from form
    var newPoll = {
      question: event.target.question.value,
      choices: [
        { text: event.target.choice1.value, votes: 0 },
        { text: event.target.choice2.value, votes: 0 },
        { text: event.target.choice3.value, votes: 0 }
      ]
    };

    // create new poll
    Polls.insert(newPoll);  
  }

});
