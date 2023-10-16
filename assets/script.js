var topic = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topic[Math.floor(Math.random() * topic.length)];

function listTopic() {
  for(var x = 0; x < topic.length; x++) {
    console.log(topic[x]);
  }
}

function selectTopic() {
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

}

console.log('here are the topics I learned throughout the prework course');
listTopic();
console.log('which topic should we study first?');
selectTopic();