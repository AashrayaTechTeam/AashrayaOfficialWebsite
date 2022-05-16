const express = require('express')
const app = express();
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"});
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({extended:true}))
require("./__DATABASE/SERVER/initialiseDB");



// link the router files 
app.use(require('./__ROUTES/TEAM_LISTING/Team'))
app.use(require('./__ROUTES/AUTHENTICATION/Auth'))
app.use(require('./__ROUTES/ADMIN_ROUTES/AdminRoutes'))
app.use(require('./__ROUTES/CONTACT_US/ContactUs'))


if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));

    app.get('/*', function(req, res) {
        const path = require("path")
        res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
          if (err) {
            res.status(500).send(err)
          }
        })
      })
}



app.listen( PORT , ()=>{
    console.log(`server connected IN PORT ${PORT}`)
})



