import { Sequelize } from "sequelize-typescript";
import config from 'config'
import DevTeam from "../models/dev-team";
import Meetings from "../models/meeting";


const sequelize = new Sequelize({
    ...config.get('db'),
    dialect: 'mysql',
    models: [DevTeam, Meetings],
    logging: console.log
})

export default sequelize