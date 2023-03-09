// Define an array of animal objects, each object has an id, name, image, and audio properties
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

// Initialize currentAnimalIndex to 0
let currentAnimalIndex = 0;

// Get references to the DOM elements for the animal picture, sound, and name
const animalPicture = document.getElementById("animal-picture");
const animalSound = document.getElementById("animal-sound");
const animalName = document.getElementById("animal-name");

// Define a function to display the current animal in the DOM
function showCurrentAnimal() {
  const currentAnimal = animals[currentAnimalIndex];
  animalPicture.src = currentAnimal.image;
  animalSound.src = currentAnimal.audio;
  animalName.textContent = currentAnimal.name;
}

// Define a function to play the animal sound
function playSound() {
  animalSound.currentTime = 0;
  animalSound.play();
}

// Define a function to show the next animal
function nextAnimal() {
  // Check if the current animal is the last one in the array, if so, redirect to a different page
  if (currentAnimalIndex === animals.length - 1) {
    window.location.replace("quizStartingPage.html");
    return;
  }
  // Increment the currentAnimalIndex and show the new current animal
  currentAnimalIndex++;
  showCurrentAnimal();
}

// Define a function to show the previous animal
function prevAnimal() {
  // Calculate the index of the previous animal and show it
  currentAnimalIndex =
    (currentAnimalIndex - 1 + animals.length) % animals.length;
  showCurrentAnimal();
}

// Display the first animal in the DOM
showCurrentAnimal();
