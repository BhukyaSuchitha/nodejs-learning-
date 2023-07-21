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

// const request = require('postman-request')
// const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=58a268e1c1dabdaf36158cb46fa05cd1&query=37.8267,-122.4233'

//  request({ url: url, json:true }, (error, response) => { 


   // const data = JSON.parse(response.body)

    //console.log(data.current)  // gives a structured way of data 
    //in case of error 

//     if(error){
//         console.log('unable to connect to the weather service!')
//     } else {

//             //above 2 commands shortly 

    
//             console.log('it is currently '+ response.body.current.temperature + ' degrees out.It feels like '+ response.body.current.feelslike + ' there is a ' + response.body.current.precip +'% chances of rain')
//            // to print the sample data as per our required data set

//     }


//   // to print the sample data as per our required data set


// })
  //  console.log(response)

  // print a small forecast to the user





 




// has 2 arguments to pass 1} what would we like to do , 2) func to run once the function is available to use


//geocoding : conversion of the loc to lat and long format 
// we are using the forwarded geocoding 
//challenge

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmh1a3lhc3VjaGl0aGEiLCJhIjoiY2xrODg2aHBvMGZjZTNtcnQwMTdjaDZnZSJ9.frfD8qQwsOnJv1usOJ2V0A&limit=1'
// Request({url: geocodeURL, json: true},(error, response )=> {
//     const latitude = response.body.features[0].centre[1]
//     const longitude = response.body.features[0].centre[0]
//     console.log(latitude, longitude)


// })
// const geocode = (adress, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +address + '.json?access_token=pk.eyJ1IjoiYmh1a3lhc3VjaGl0aGEiLCJhIjoiY2xrODg2aHBvMGZjZTNtcnQwMTdjaDZnZSJ9.frfD8qQwsOnJv1usOJ2V0A&limit=1'
    
//     request({ url: url, json: true}, (error,response) => {
//         if(error) {
//             callback('unable to connect to location services',undefined) 
//         }

    

//      else if( response.body.features.length === 0){

//         callback('unable to find the location.try another search.',undefined)


    
//     }
    
    
    
//     })
    
//    geocode('Boston', (error, data) => {         // to conditionally check what is happening , either it has the value or its an error
//        console.log('Error',error)
//        console.log('Data',data)

        
    // similarly can add different callbacks based on the data that we need 
    // can access to n number of items that are present in the given data json directory 
    
    
    // })

//}

// challenge in callback abstraction 

const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')


geocode('Boston' , (error, data) => {
     console.log('Error', error)
     console.log('Data', data)

})

