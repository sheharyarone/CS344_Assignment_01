const animals = [
  {
    id: 1,
    name: "cat",
    image: "../src/img/cat.png",
    audio: "../src/audio/cat.mp3",
  },
  {
    id: 2,
    name: "cow",
    image: "../src/img/cow.png",
    audio: "../src/audio/cow.mp3",
  },
  {
    id: 3,
    name: "dog",
    image: "../src/img/dog.png",
    audio: "../src/audio/dog.mp3",
  },
  {
    id: 4,
    name: "mouse",
    image: "../src/img/mouse.png",
    audio: "../src/audio/mouse.mp3",
  },
  {
    id: 5,
    name: "parrot",
    image: "../src/img/parrot.png",
    audio: "../src/audio/parrot.mp3",
  },
  {
    id: 6,
    name: "rabbit",
    image: "../src/img/rabbit.png",
    audio: "../src/audio/rabbit.mp3",
  },
  {
    id: 7,
    name: "sparrow",
    image: "../src/img/sparrow.png",
    audio: "../src/audio/sparrow.mp3",
  },
];
// Select DOM elements
const scoreDisplay = document.querySelector("#score");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const audio = document.querySelector("#audio");
const answerDisplay = document.querySelector("#answer");
const submitButton = document.querySelector("#submit-button");
const playButton = document.querySelector("#play-button");

// Shuffle the animal array
const shuffledAnimals = animals.sort(() => 0.5 - Math.random());

// Initialize quiz variables
let score = 0;
let currentQuestionIndex = 0;

// Display the first question
displayQuestion();

// Handle submit button click
submitButton.addEventListener("click", () => {
  const selectedImage = document.querySelector(".selected");
  if (!selectedImage) {
    answerDisplay.textContent = "Please select an answer.";
    return;
  }

  const correctAnimal = shuffledAnimals[currentQuestionIndex];
  const selectedAnimal = shuffledAnimals.find(
    (animal) => animal.name === selectedImage.alt
  );

  if (correctAnimal === selectedAnimal) {
    answerDisplay.textContent = "Correct!";
    answerDisplay.classList.remove("wrong");
    answerDisplay.classList.add("correct");
    score++;
  } else {
    answerDisplay.textContent = "Wrong!";
    answerDisplay.classList.remove("correct");
    answerDisplay.classList.add("wrong");
  }

  // Disable the buttons
  selectedImage.classList.remove("selected");
  submitButton.disabled = true;
  playButton.disabled = true;

  // Increment current question index and display the next question or end the quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < 5) {
    setTimeout(displayQuestion, 1000);
  } else {
    setTimeout(displayResults, 1000);
  }
});

// Handle image click
image1.addEventListener("click", () => {
  image1.classList.add("selected");
  image2.classList.remove("selected");
  submitButton.disabled = false;
});

image2.addEventListener("click", () => {
  image2.classList.add("selected");
  image1.classList.remove("selected");
  submitButton.disabled = false;
});

// Handle play button click
playButton.addEventListener("click", () => {
  audio.play();
});

// Display the current question
function displayQuestion() {
  const currentAnimal = shuffledAnimals[currentQuestionIndex];
  image1.src = currentAnimal.image;
  image1.alt = currentAnimal.name;
  var randomSecondImg = (currentQuestionIndex + 1) % 7;
  image2.src = shuffledAnimals[randomSecondImg].image; // Select a random image for the second option
  image2.alt = shuffledAnimals[randomSecondImg].name;
  audio.src = currentAnimal.audio;
  answerDisplay.textContent = "";
  submitButton.disabled = true;
  playButton.disabled = false;
  scoreDisplay.textContent = `${score}`;
}

// Display the final score
function displayResults() {
  document.querySelector("#game-container").innerHTML = `
    <h1>Congratulations!</h1>
    <p>You scored ${score} out of 5.</p>
    <button onclick="window.location.reload()">Play Again</button>
  `;
}
