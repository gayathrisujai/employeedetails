const express = require('express');
const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');

require('dotenv').config()
const PORT=process.env.PORT

//DB Connection
require('./db/connection')

const nav=[

    {
        link:'/employee',name:'Home'
    },
    {
        link:'/employee/index',name:'ADD Employee'
    }
        ]

//Router path
const empRoute = require('./routers/user')(nav)
app.use('/',empRoute)


// Server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
