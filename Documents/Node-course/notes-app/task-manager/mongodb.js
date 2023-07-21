//CRUD operations : create read update delete 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')



const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'Task-manager'

// const id = new ObjectID() 
// console.log(id.id.length) // to know the length
// console.log(id.toHexString().length)
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser:true}, (error,client) => {


    if(error){
        return console.log('unable to connect to database')
    }
    
        
    const db = client.db(database)
    
        db.collection('users').insertOne({
            name: 'suchitha',
            age: 21
        }, (error,result)=> {
            if(error){
                return onslotchange.log('unable to insert the user')
            }
    
            console.log(result.insertedIds)

        })
        // }) // used for one user case
    
     }) // for many users case 
    
//         db.collection('users').insertMany([
//             {
//                 name: 'Suchitha',
//                 age: 21
    
//             },{
//                 name: 'Momo',
//                 age: 41
    
//             },{
//                 name: 'lavish',
//                 age: 81
//             }
//         ], (error,result) => {
//             if(error){
//                  console.log('unable to insert documents')
//             }
    
//             else{

//                 console.log(result.insertedIds)
//             }
//         })
//         console.log('connected correctly')
//     })
    




// })