const express = require('express')
// var bodyParser = require("body-parser");
const app = express()
const port = 5000;
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
// app.use( express.static( "public" ) );
// app.use( bodyParser.json() );       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// })); 
// app.set("view engine", "ejs");
 app.use(express.json());
app.use('/api/auth',require('./routes/auth'));

app.use('/api/bookrichshaw',require('./routes/bookrichshaw'));
app.use('/api/bookcycle',require('./routes/bookcycle'));
app.use('/api/show',require('./routes/showbooking'));
app.use('/api/delete',require('./routes/Deletebooking'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})