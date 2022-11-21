const topic = ["HTML","CSS", "Git", "Javascript"];

const randomTopic = topic[Math.floor(Math.random() * topic.length)]

const listTopics = () => {
    for (let i = 0; i < topic.length; i++) {
        console.log(topic[i]);
    }
}

const selectTopics = () => {
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
};



listTopics()
console.log("Here are the topics we learned through prework")

console.log("which topic should we study first")
selectTopics();
/*  const shapes = ["triangle","square", "pentagon", "circle"];
  console.log(shapes)

  for (let i = 0; i < shapes.length; i++) {
    console.log(i)
  };
*/

