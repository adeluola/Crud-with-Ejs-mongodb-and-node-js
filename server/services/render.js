const axios = require('axios')


exports.homeRoute = (req, res) => {
    axios.get('http://localhost:3000/api/users',{
        params:{
            page : req.query,
            size : req.query
        }
    })
        .then(function (response) {
            console.log(response)
            res.render('index', { user: response.data })
        })
        .catch(err => {
            res.send(err)
        })
}



exports.newUserRoute = (req, res) => {
    res.render('add_user')
}
exports.UpdateUserRoute = (req, res) => {
    axios.get('http://localhost:3000/api/users', {
        params: {
            id: req.query.id
        }
    })
        .then(function (userdata) {
            res.render('update_user', { user: userdata.data })
                .catch(err => {
                    res.send(err)
                })
        })

}