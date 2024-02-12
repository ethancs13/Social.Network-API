// usernames array
const usernames = [
    'BrianGansukh',
    'EthanSroka',
    'EmmaClarkson',
    'AnnaCater',
    'ClydeTaylor',
    'HenryYoung',
    'MacyCummings',
    'SimonFields',
  ];
  // thoughts array
  const thoughts = [
    'Learning a new skill is a journey of self-discovery.',
    'Coding styles may differ, but the logic is a universal language.',
    'I correct autocorrect more than it corrects me.',
    "There are two E's in bee, but they're both silent.",
    'The only difference between relaxation and boredom is enjoyment.',
    'If tomatoes are fruit, then ketchup is jam.',
    "Only one sock goes missing because if both did, you wouldn't notice.",
    'Does a straw have one hole, or two?',
  ];
  // reactions array
  const reactions = [
    "That's incredible!",
    'Pretty neat.',
    "I'm impressed!",
    'Sending positive vibes',
    'Hahaha',
    'Really? Is that true?',
    "That's hard to believe.",
    'That is not true.',
  ];
  // email array
  const emails = ['gmail', 'hotmail', 'yahoo', 'outlook'];
  
  // random item
  const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // random user and email
  const randomUsers = (numUsers) => {
    const usersArray = [];
    for (let i = 0; i < numUsers; i++) {
      usersArray.push({
        username: randomArrayItem(usernames),
        email: `${randomArrayItem(usernames)}@${randomArrayItem(emails)}.com`,
      });
    }
    return usersArray;
  };
  
  // random user/reaction
  const randomReactions = (numReactions) => {
    const reactionsArray = [];
    for (let i = 0; i < numReactions; i++) {
      reactionsArray.push({
        username: randomArrayItem(usernames),
        reactionBody: randomArrayItem(reactions),
      });
    }
    return reactionsArray;
  };
  
  // random thought
  const randomThoughts = (numThoughts) => {
    const thoughtsArray = [];
    for (let i = 0; i < numThoughts; i++) {
      thoughtsArray.push({
        thoughtText: randomArrayItem(thoughts),
        username: randomArrayItem(usernames),
        reactions: randomReactions(3),
      });
    }
    return thoughtsArray;
  };
  
  module.exports = { randomUsers, randomReactions, randomThoughts };