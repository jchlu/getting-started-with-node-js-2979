const createVehicle = (id, make, model, year) => (
  {
    id,
    make,
    model,
    year,
    fullDescription () {
      return `Vehicle details: ${year} ${make} ${model}`
    }
  }
)

const jCar = createVehicle(1, 'Benz', 'SLK', '2012')
const zCar = createVehicle(2, 'Mitsubishi', 'PHEV', '2015')
const wCar = createVehicle(3, 'Mazda', '2', '2010')

console.log(jCar.model)
console.log(zCar.fullDescription())

const cars = [ jCar, zCar, wCar ]

const makes = cars.map((car) => car.make)

console.log(makes)

const grades = [87, 97, 86, 93, 67]
let sum = 0
for (let index = 0; index < grades.length; index++) {
  sum += grades[index]
}

console.log(`Our sum is ${sum}`)
console.log(`Our average is ${(sum / grades.length).toFixed(1)}`)

const total = grades.reduce((sum, grade) => (sum + grade), 0)

console.log(`Our sum is ${total}`)
console.log(`Our average is ${(total / grades.length).toFixed(1)}`)

const vehicles = [ { id: 1,
  make: 'Benz',
  model: 'SLK',
  year: '2012',
  is4WD: false },
{ id: 2,
  make: 'Mitsubishi',
  model: 'PHEV',
  year: '2015',
  is4WD: true },
{ id: 3,
  make: 'Mazda',
  model: '2',
  year: '2010',
  is4WD: false }]

const areSome4WD = vehicles.some(vehicle => vehicle.is4WD)
const isEveryVehicle4WD = vehicles.every(vehicle => vehicle.is4WD)

console.log(`Are there any 4WD vehicles: ${areSome4WD ? 'Yes' : 'No'}`)
console.log(`Are all vehicles 4WD? ${isEveryVehicle4WD ? 'Yes' : 'No'}`)

// this & bind
const person1 = {
  name: 'Joe'
}

const person2 = {
  name: 'Jane'
}

// Cannot use fat arrow functions here -
// This doesn't work with `this`:
// const logName = () => this.name
function logName () {
  return this.name
}

// bind `this` from the object passed in, to the function `call` is called on.
console.log(logName())
console.log(logName.bind(person1)())
console.log(logName.bind(person2)())

// call takes the context as the first element and calls the function
function hello (greeting) {
  console.log(`${greeting} ${this.name}`)
}

hello.call(person2, 'Well, hi there')
hello.call(person1, 'Yo')
