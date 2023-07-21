const path = require('path')


const express = require('express')



//console.log(__dirname) //for the name of the file 
//console.log(__filename)// for the path

// for direct use of path 
//console.log(path) //using this we get a complete path details 
//console.log(path.join(__dirname,'../..')) //manipulation of the path ; by 2 dots it points back to one folder behind of the present one 
// any html file can also be accessed by explicitly adding it to the browser line 

const app = express()
const publicDirectoryPath = path.join(__dirname,'/../public')


app.use(express.static(path.join(__dirname,'/../public'))) //used to customize the server 

app.set('view engine',' hbs') // to setup teh handle bars
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=> {
    res.render('index')
})

app.get('', (req,res)=> { // need 2 arguments that are req and the response
    res.send('<h1>Hello express</h1>') //can send the html files that must be displayed oin the browser


})



app.get('/help', (req,res) => { // we can also send the json responces 
    res.send({  //'This is the help page' //can also send the array of objects 
        name: 'Suchitha',
        age: 21

    })// automatically stringifies the json file 



})

// set up two routes [challenge]

app.get('/about', (req,res) => { //route 1 about page 
    res.send('<h2>This is the title ; rendered using HTML </h2>')

})

app.get('/weather', (req,res) => {// route 2 for weather page 

    
    res.send({
        forecast:'it is raining',
        location:'Hyderabad '
    })
})


    app.get('/products', (req,res)=> {

        if(!req.query.search){
            return res.send({
                error: 'You must provide a search term' //throw error that it cannot set headers after they are sent to client

            })
        }

        console.log(req.query.search)
        res.send({
            products: []
        })


    })





// app.get('*', (req,res)=> {
//     res.send('404 page not found')



// })
app.listen(3000, () => {
    console.log('Server is up on port 3000')

})



