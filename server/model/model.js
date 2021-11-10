const mongos = require("mongoose")
const paginate = require("mongoose-paginate-v2")

const options = {
    page: 1,
    limit: 2,
    collation: {
      locale: 'en',
    },
  };

var schema = new mongos.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    status : String,
    gender : String
    
})
//schema.plugin(paginate)


const UserDb = mongos.model('userdb',schema);

//UserDb.paginate({},options,(err,res)=>{

//})

module.exports = UserDb;