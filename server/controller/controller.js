var userDb = require("../model/model")


//export for create
exports.create = (req,res)=> {
    if(!req.body){
        res.status(404).send({message : 'Content cannot be empty'})
        return;
    }

    const user = new userDb({
        name : req.body.name,
        email : req.body.email,
        status : req.body.status,
        gender : req.body.gender
    })
    user
    .save(user)
    .then(data => {
        // res.send(data)
       res.redirect('/')
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || 'some error occurred while creating user'
        })
    })

}
// export for search
exports.find = (req,res) =>{
  if (req.query.id) {
    const id = req.query.id
    userDb.findById(id)
    .then(data =>{
        if (!data) {
            res.status(404).send({
                message : 'User not found'
            })
        } else {
            res.send(data)
        }
    })
   .catch(err=>{
       res.status(500).send({
           message : 'error retrieving data'
       })
   })   
  }
   else {
    userDb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({
            message : err.message || 'error occurred while retriving user data'
        })
    })  
  }
   

}
//export for update
exports.update = (req,res) =>{
    if(!req.body){
        return res
        .status(400)
        .send({message : "data to update cannot b empty"})
    }
    const id = req.params.id
    userDb.findByIdAndUpdate(id,req.body,{ useFindAndModify : false })
    .then(data =>{
        if(!data){
            res.status(404).send({message : `cannot update user of ID ${id}. Maybe user not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({
            message : "error in updating user details"
        })
    })

}

//export for delete
exports.delete = (req,res) =>{
    const id = req.params.id
    userDb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({
                message : `Cannot delete ${id}.. maybe wrong id`
            });
        }
        else(
            res.send({
                message : "user successfully deleted"
            })
        )
    })
    .catch(err =>{
        res.status(500).send({
            message : `could not delete user with id ${id}`
        })
    })

}
