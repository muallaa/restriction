var express  = require('express')


const mongoose = require("mongoose")

const route  = require('./routes/routes')
var bodyParser = require('body-parser');


const app = express()

app.use(bodyParser.json());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');
var corsoption = {
    origin : '*'
}
app.use(cors(corsoption))

const conn_str = 'mongodb+srv://muallahamdan:eOp8W8n4JQY3q4Te@cluster0.dzvbc64.mongodb.net/koyoud'

const port = 3000

mongoose.connect(conn_str , { useNewUrlParser : true , useUnifiedTopology : true})
                .then( result => app.listen(port))
                .catch(err => console.log(err))

app.use(express.static('public'))
app.use(express.urlencoded({ extended : true}))

    
app.get('/' , (req , res) =>{
    res.send("hello")
})



app.use(route)
app.use(express.json())
