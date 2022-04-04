const messages = [
  "Hello, friend!",
  "How are you?",
  "I'm doing fine.",
  "It's raining! Let's go play!",
  "Pickle Riiiiiiiiiick!!!",
  "I'm Batman.",
];

const randomMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMessage };