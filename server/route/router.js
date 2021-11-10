const express = require('express')
const route = express.Router();

//controller
const controller = require("../controller/controller")

const services = require("../services/render")

    route.get("/",async (req,res)=>{
        try{
            let{page,size} =req.query
            if(!page)
            {
                page = 1
            }
            if(!size) {
                size = 1
            }
            const limit = parseInt(size)
            const skip = (page - 1) * size

            const users = await user.find().limit(limit).skip(skip)
            res.send({
                page,
                size,
                data : services.homeRoute
            })
        }
        catch(e){
            res.sendStatus(500).send(error.message)

        }
    });

    route.get("/add_user",services.newUserRoute);

    route.get("/update_user",services.UpdateUserRoute);

    route.post('/api/users',controller.create);
    route.put('/api/users/:id',controller.update);
    route.delete('/api/users/:id',controller.delete)
    route.get('/api/users',controller.find);
    module.exports = route