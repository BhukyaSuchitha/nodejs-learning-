// console.log('Starting')


// setTimeout(() => {


//     console.log("timer set for half sec") // gets printed after n sec of executing other commands 
// }, 500) //the 2000 is of n sec timer that we have set

//   //setting up a second timer 
// setTimeout(() => {
//     console.log("second timer it is ")
// }, 0)

//  after setting 2 timers the timer which is of less timeout runs faster,relatively
  
// console.log('Stopping')

// const x = 1
// const y = x+22

// console.log('sum is ' + y) //to add the line along with the printable sum obtained from the given operation 

// const listLocations = (locations) => {

//     locations.forEach((location) => {
//         console.log(location)
//     })
// }

// const myLocations = ['gurgoan','India']

// listLocations(myLocations)



//make req for real time data ;http req 1) tried using the same api req directly from the browser and then now trying pn vs code

// here using a single npm module to fetch the http request

const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=58a268e1c1dabdaf36158cb46fa05cd1&query=37.8267,-122.4233'

request({ url: url, json:true }, (error, response) => { 


   // const data = JSON.parse(response.body)

    //console.log(data.current)  // gives a structured way of data 


    //above 2 commands shortly 
    console.log('it is currently '+ response.body.current.temperature + ' degrees out.It feels like '+ response.body.current.feelslike + ' there is a ' + response.body.current.precip +'% chances of rain')
  // to print the sample data as per our required data set



  //  console.log(response)

  // print a small forecast to the user





} ) 




// has 2 arguments to pass 1} what would we like to do , 2) func to run once the function is available to use