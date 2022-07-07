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
    if (this.age === 6){
      element.classList.remove('puppyMove')
      element.classList.add('turnoff')
      element2.classList.remove('turnoff')

      alert('Your puppy is now a dog!')
    }
    document.querySelector('.age').innerText = `Age : ${this.age}`
    

  }
//function to increment hunger by 1 and stop the interval when reaches 10
  hungerUp = () => {    
    if (this.hunger >= 10) {
      stopInterval()
      alert('fainted')
    } else {
      this.hunger += 1
      document.querySelector('.hunger').innerText = `Hunger : ${this.hunger}`  
      
    }
  }

  sleepUp = () => {
    
    if (this.sleepniness === 10){
      stopInterval()
      return alert('fainted of sleepniness')
    } else {
      this.sleepniness += 1
      document.querySelector('.sleepniness').innerText = `Sleepniness : ${this.sleepniness}` 
    }
  }
  
  boredomUp = () => {
    if (this.boredom >= 10){
      stopInterval()
      return alert('fainted of boredom')    
    } else {
      this.boredom += 1
      document.querySelector('.boredom').innerText = `Boredom : ${this.boredom}`
      
    }
    
  }

}

//Require game object or class



const myPet = new Pet()
document.querySelector('#start').addEventListener('click', function(){
  myPet.name = window.prompt("Enter your name: ")
  document.querySelector('h1').innerText = myPet.name

  startInterval()
  // setInterval(myPet.ageUp, 1000)
  // startHungerInterval()
  // setInterval(myPet.sleepUp, 2000)
  // setInterval(myPet.boredomUp, 3000)
})
//set element names to enable the ablity to start and stop the interval
let hungerinterval;
let ageInterval;
let sleepInterval;
let boredomInterval;
//function to start the timed interval to increment the features
const startInterval = () => {
  hungerinterval = setInterval(myPet.hungerUp, 1000)
  ageInterval = setInterval(myPet.ageUp, 1000)
  sleepInterval = setInterval(myPet.sleepUp, 2000)
  boredomInterval = setInterval(myPet.boredomUp, 3000)
}
//function to stop the timed interval when the pet faints
const stopInterval = () => {
  clearInterval(hungerinterval)
  clearInterval(ageInterval)
  clearInterval(sleepInterval)
  clearInterval(boredomInterval)

}
// let hun;
// const startHungerInterval = () => {
//   hun = setInterval(myPet.hungerUp, 1000)
// }
// const stopHungerInterval = () => {
//   clearInterval(hun)
// }

document.querySelector('#feed').addEventListener('click', function(){
  myPet.hunger -= 1
  document.querySelector('.hunger').innerText = `Hunger : ${myPet.hunger}`

})
document.querySelector('#play').addEventListener('click', function(){
  myPet.boredom -= 1
  document.querySelector('.boredom').innerText = `Boredom : ${myPet.boredom}`
  const movement = document.querySelector('#puppyContainer')
  movement.classList.add('puppyMove')
  alert('Once a puppy starts moving it does not stop :)')
  })


document.querySelector('#sleep').addEventListener('click', function(){
  myPet.sleepniness -= 1
  document.querySelector('.sleepniness').innerText = `Sleepniness : ${myPet.sleepniness}`

})








