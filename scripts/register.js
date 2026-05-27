const pets = [
  { name: "Scooby", age: 8, gender: "Female", breed: "Great Dane", service: "Dog Walking" },
  { name: "Scrappy", age: 7, gender: "Male", breed: "Boxer", service: "Grooming" },
  { name: "Doggy", age: 1, gender: "Male", breed: "Pug", service: "Bath and Brush" }
];

const form = document.querySelector("#petForm");
const inputName = document.querySelector("#txtName");
const inputAge = document.querySelector("#txtAge");
const inputGender = document.querySelector("#txtGender");
const inputBreed = document.querySelector("#txtBreed");
const inputService = document.querySelector("#txtService");
const formMessage = document.querySelector("#formMessage");
const results = document.querySelector("#results");
const petCount = document.querySelector("#petCount");

function createPet() {
  return {
    name: inputName.value.trim(),
    age: Number(inputAge.value),
    gender: inputGender.value,
    breed: inputBreed.value.trim(),
    service: inputService.value
  };
}

function validatePet(pet) {
  if (!pet.name || !pet.breed || !pet.gender || !pet.service) {
    return "Please complete every field.";
  }

  if (!Number.isFinite(pet.age) || pet.age < 0 || pet.age > 40) {
    return "Please enter an age between 0 and 40.";
  }

  return "";
}

function registerPet(event) {
  event.preventDefault();

  const pet = createPet();
  const error = validatePet(pet);

  if (error) {
    formMessage.textContent = error;
    formMessage.className = "form-message error";
    return;
  }

  pets.push(pet);
  form.reset();
  formMessage.textContent = `${pet.name} was registered for ${pet.service}.`;
  formMessage.className = "form-message success";
  displayPets();
  inputName.focus();
}

function displayPets() {
  results.innerHTML = "";

  pets.forEach((pet, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${pet.name}</td>
      <td>${pet.age}</td>
      <td>${pet.gender}</td>
      <td>${pet.breed}</td>
      <td>${pet.service}</td>
      <td>
        <button class="delete-button" type="button" data-index="${index}">Delete</button>
      </td>
    `;

    results.appendChild(row);
  });

  petCount.textContent = `${pets.length} ${pets.length === 1 ? "pet" : "pets"}`;
}

function deletePet(index) {
  const [removedPet] = pets.splice(index, 1);
  formMessage.textContent = removedPet ? `${removedPet.name} was removed.` : "";
  formMessage.className = "form-message";
  displayPets();
}

form.addEventListener("submit", registerPet);

results.addEventListener("click", (event) => {
  const button = event.target.closest("[data-index]");
  if (!button) return;
  deletePet(Number(button.dataset.index));
});

displayPets();
