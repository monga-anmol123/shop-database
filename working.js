const mongoose = require('mongoose')

const username = process.env.name;
const password = process.env.password;
const cluster = process.env.cluster;
const dbname = process.env.dbname;


console.log(username,"1",password,"1",cluster,"1",dbname,"1" )
mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports= db