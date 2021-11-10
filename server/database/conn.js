const mongos = require('mongoose');

const connectDB = async()=>{
    try{
        const con = await mongos.connect(process.env.MONGO_URL,{
            useNewUrlParser : true,
            useFindAndModify : false,
            useUnifiedTopology : true,
            useCreateIndex : true
        })
        console.log(`MongoDb connection : ${con.connection.host}`)
    }
    catch(err){
        console.log(err)
        process.exit(1);

    }
}
module.exports = connectDB;