import { DataTypes } from "sequelize";
import sequelize from "./connection.mjs";

const User = sequelize.define('Username',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,  
  }
})

const Job = sequelize.define('Job', {
  job:{
    type: DataTypes.STRING,
    allowNull:false,
  }
})

export { User,Job };