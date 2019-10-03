let cars = [ {
    make: 'jeep',
    model: 'wrangler',
    year: 2019
},
    {
    make: 'honda',
    model: 'civic',
    year: 2017
}, {
    make: 'bmw',
    model: 'm4',
    year: 2019
}
] 


let newCars = cars.filter( (car) => {
     return cars.year = 2019 } )
let displayData = cars.map( (car) => { 
    let result = car
    result.display = car.year + ' ' + car.make + ' ' + car.model
    return result
} )
 console.log(displayData)

