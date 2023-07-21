const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
const User = mongoose.model('User',{
    name: {
        type: String 

    },
    age:{
        type: Number

    }


})
//defining a model
// const me = new User ({
//     name: 'suchitha',
//     age: 21

// })

// // to save the model instances 

// me.save().then(()=> {
//     console.log(me)


// }).catch((error)=> {

//     console.log('Error', error)
// })

const Task = mongoose.model('Task', {
    Description: {
        type: String 
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Learn the mongoose lib',
    completed: false 

})
task.save().then(()=> {
    console.log(task)



}).catch((error)=> {
    console.log(error)

})