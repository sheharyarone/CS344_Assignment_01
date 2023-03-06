const animals = [
  { id: 1, name: "cat", image: "src/img/cat.png", audio: "src/audio/cat.mp3" },
  { id: 2, name: "cow", image: "src/img/cow.png", audio: "src/audio/cow.mp3" },
  { id: 3, name: "dog", image: "src/img/dog.png", audio: "src/audio/dog.mp3" },
  {
    id: 4,
    name: "mouse",
    image: "src/img/mouse.png",
    audio: "src/audio/mouse.mp3",
  },
  {
    id: 5,
    name: "parrot",
    image: "src/img/parrot.png",
    audio: "src/audio/parrot.mp3",
  },
  {
    id: 6,
    name: "rabbit",
    image: "src/img/rabbit.png",
    audio: "src/audio/rabbit.mp3",
  },
  {
    id: 7,
    name: "sparrow",
    image: "src/img/sparrow.png",
    audio: "src/audio/sparrow.mp3",
  },
];

let currentAnimalIndex = 0;
const animalPicture = document.getElementById("animal-picture");
const animalSound = document.getElementById("animal-sound");

function showCurrentAnimal() {
  const currentAnimal = animals[currentAnimalIndex];
  animalPicture.src = currentAnimal.image;
  animalSound.src = currentAnimal.audio;
}

function playSound() {
  animalSound.currentTime = 0;
  animalSound.play();
}

function nextAnimal() {
  currentAnimalIndex = (currentAnimalIndex + 1) % animals.length;
  showCurrentAnimal();
}

function prevAnimal() {
  currentAnimalIndex =
    (currentAnimalIndex - 1 + animals.length) % animals.length;
  showCurrentAnimal();
}

showCurrentAnimal();
