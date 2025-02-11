const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

let sequelize = null;

try{
        sequelize = new Sequelize(process.env.DB_URL,{
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
    })
}
catch(e){
    console.log("Error Occured")
    console.log(e)
} 

const Gadget = sequelize.define('Gadget', {
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4, // Generate UUID by default
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM('Available', 'Deployed', 'Destroyed', 'Decommissioned'),
          allowNull: false,
        },
      });


module.exports = { Gadget, sequelize};