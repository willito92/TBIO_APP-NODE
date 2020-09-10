const mongoose = require('mongoose')
const{TBIO_APP_MONGODB_HOST, TBIO_APP_MONGODB_DATABASE}=process.env;
const MONGODB_URI =`mongodb://${TBIO_APP_MONGODB_HOST}/${TBIO_APP_MONGODB_DATABASE}`;
//'mogodb://localhost/notes-app'

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex:true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));


