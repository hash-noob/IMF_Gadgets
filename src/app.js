const  express = require('express');
const cors = require('cors');
const { Gadget,sequelize } = require('./models/gadgetModel');
require('dotenv').config();

const gadgetRoutes = require('./routes/gadgetRoutes');


const app = express();
isConnected = sequelize === null ? false : true;

app.use(cors());    //to allow cross-origin requests
app.use(express.json());  // to parse the incoming requests with JSON payloads


if(isConnected){
    console.log("Connected to the database")
}else{
    console.log("Error Occured")
}   

app.use('/gadgets',gadgetRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000')
}
)
  
app.get('/', (req, res) => {  
    res.send('Welcome to the Gadget API')
})
app.get('/*', (req, res) => {
    res.status(404).send('The API endpoint does not exist')
})
module.exports = app;