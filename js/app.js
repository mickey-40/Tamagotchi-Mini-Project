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
  ageUp = () => {
    this.age += 1
    let element = document.querySelector('#puppyContainer')
    let element2 = document.querySelector('#dogContainer')
    if (this.age > 5){
      element.classList.add('turnoff')
      element2.classList.remove('turnoff')
    }
    document.querySelector('.age').innerText = `Age : ${this.age}`

  }
  hungerUp = () => {
    if (this.hunger < 10){
      this.hunger += 1
      document.querySelector('.hunger').innerText = `Hunger : ${this.hunger}`    
    } else {
      // return alert('fainted')
    }
  }
  sleepUp = () => {
    if (this.sleepniness < 10){
      this.sleepniness += 1
      document.querySelector('.sleepniness').innerText = `Sleepniness : ${this.sleepniness}`    
    } else {
      // return alert('fainted')
    }
  }
  boredomUp = () => {
    if (this.boredom < 10){
      this.boredom += 1
      document.querySelector('.boredom').innerText = `Boredom : ${this.boredom}`    
    } else {
      // return alert('fainted')
    }
    
  }

}

//Require game object or class
class game {

}


const myPet = new Pet()
document.querySelector('#start').addEventListener('click', function(){
  myPet.name = window.prompt("Enter your name: ")
  document.querySelector('h1').innerText = myPet.name

  setInterval(myPet.ageUp, 1000)
  setInterval(myPet.hungerUp, 2000)
  setInterval(myPet.sleepUp, 2000)
  setInterval(myPet.boredomUp, 3000)
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
  document.querySelector('.sleepniness').innerText = `Sleepniness : ${myPet.sleepniness}`

})

function myStop() {
  clearInterval(myInterval);
}






