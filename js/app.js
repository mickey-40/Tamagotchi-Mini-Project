//Require pet class

class Pet {
  constructor(name, hunger = 0, sleepniness = 0, boredom = 0, age = 0) {
    this.name = name
    this.hunger = hunger
    this.sleepniness = sleepniness
    this.boredom = boredom
    this.age = age
  }
  //function that rises Attributes
  raiseAttributes = () => {
    myPet.age += 1
    document.querySelector('.age').innerText = `Age : ${myPet.age}`
    myPet.hunger += 1
    document.querySelector('.hunger').innerText = `Hunger : ${myPet.hunger}`
    myPet.sleepniness += 1
    document.querySelector('.sleepiness').innerText = `Sleepiness : ${myPet.sleepniness}`
    myPet.boredom += 1
    document.querySelector('.boredom').innerText = `Boredom : ${myPet.boredom}`
  }
}

//Require game object or class
class game {

}


const myPet = new Pet()
document.querySelector('#start').addEventListener('click', function(){
  myPet.name = window.prompt("Enter your name: ")
  setInterval(myPet.riseAttributes, 2000)
})

document.querySelector('#feed').addEventListener('click', function(){
  myPet.hunger -= 1
  document.querySelector('.hunger').innerText = `Hunger : ${myPet.hunger}`

})
document.querySelector('#play').addEventListener('click', function(){
  myPet.boredom -= 1
  document.querySelector('.boredom').innerText = `Boredom : ${myPet.boredom}`

})
document.querySelector('#sleep').addEventListener('click', function(){
  myPet.sleepniness -= 1
  document.querySelector('.sleepiness').innerText = `Sleepiness : ${myPet.sleepniness}`
})


