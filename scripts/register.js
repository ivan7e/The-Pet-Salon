let pets=[]; // the empty array
//HTML inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

//object constructor
function Pet(name, age, gender, breed, service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

function register(){
    // create the newPet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    //push the newPet
    pets.push(newPet);
    //display the pets
    displayPets();
}
//display name function
function displayPets(){
    let result = "";

    document.getElementById("results").innerHTML="";

    for(let i=0;i<pets.length;i++){
        // document.getElementById("results").innerHTML+=`<li>${pets[i].name} - ${pets[i].age}</li>`;// arrayName[position]
        //result += `
            //<div class="card" style="width: 18rem;">
            //<div class="card-body">
                     //<h5 class="card-title">${pets[i].name} - <span class="text-secondary">${pets[i].service}</span> </h5>
                    //<h6>${pets[i].breed}</h6>
                    //<p class="card-text">${pets[i].gender}, ${pets[i].age}</p>
                    //<a href="#" class="btn btn-danger btn-sm">Delete</a>
                //</div>
            //</div>
        //`

        result += `
        <tr id="${i}">
            <tr>
              <td>${pets[i].name}</td>
                <td>${pets[i].age}</td>
                <td>${pets[i].gender}</td>
                <td>${pets[i].breed}</td>
                <td>${pets[i].service}</td>
                <td>${pets[i].delete}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deletePet(${i})">Delete</button></td>  
            </tr>
        `

    }

        

    document.getElementById("results").innerHTML=result;
}


function deletePet(petID){
    console.log("Delete a pet... " + petID);
    //delete from HTML
    document.getElementById(petID).remove();
    //delete from the array
    pets.splice(petID,1);
    displayPets();
}


function init(){
    //create pet objects
    let pet1 = new Pet("Scooby",80,"Female", "Great Dane", "Dog Walking");
    //create another pet Scrappy
    let pet2 = new Pet("Scrappy",70,"Male", "Boxer", "Grooming");
    let pet3 = new Pet("Doggy", 1, "Male", "Pug", "Dog Walking");
    // push the pets in the array
    pets.push(pet1,pet2,pet3);
    // display names
    displayPets();
}

window.onload=init;// wait to render the HTML