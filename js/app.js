//Require pet class

class Pet {
  constructor(name, hunger, sleepniness, boredom, age) {
    this.name = name
    this.hunger = hunger
    this.sleepniness = sleepniness
    this.boredom = boredom
    this.age = age
  }
}

//Require game object or class
class game {

}

const myPet = new Pet()
myPet.name = window.prompt("Enter your name: ")
console.log(myPet.name)