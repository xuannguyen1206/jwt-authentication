import { Sequelize } from "sequelize";
const sequelize = new Sequelize('authentication','test', 'password',{
  dialect:'mysql',
  host:'localhost',
})
export default sequelize;