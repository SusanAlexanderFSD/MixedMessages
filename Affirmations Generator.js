const time = [
    "Today you", "Tomorrow you", "This week you", "Next week you", "This Month you", "This year you",
  ];
  
  const affirmations = [
    "are braver that you believe and stronger than you seem, and smarter than you think", 
    "are beautiful inside and out", "should work on your gratitude", "should have more hope", 
    "will feel happy", "might meet your soulmate", "might win the lottery",
    "should try something new", "should take a nap", "should go for a walk", "should let go of anger", 
    "should let go of fear", "should do something you have been avoiding"
  ];
  
  const steps = [
    "You should", "You will", "You need to", "You can"
  ]
  
  const actions = [
    "go for a walk", "go to a dance class", "read a book", "change career", "go out for dinner with friends",
     "go on holiday", "take up a hobby", "watch a movie", "take a hot bath", "do some exercise", 
    "phone a friend",
  ]

  const outcomes = [
    "because you are worth it", "because life is too short", "because it will make you happier",
     "because you need a reset", "and achieve greatness", "because it will make a difference", 
     "and inspire others",
  ];
  
  const getRandomMessage = () => {
    const randomTime = time[Math.floor(Math.random() * time.length)];
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    const randomSteps = steps[Math.floor(Math.random() * steps.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  
    return `${randomTime} ${randomAffirmation}  and  ${randomSteps} ${randomAction} ${randomOutcome}.`;
  };
  
  console.log(getRandomMessage());