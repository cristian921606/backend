"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const logger_1 = require("../logger");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: msg => logger_1.logger.debug(msg)
});
//Propiedad.hasOne(Huesped, {foreignKey: 'id_usuario', as: 'userRelation'})
//Huesped.belongsTo(Propiedad, {foreignKey: 'id_usuario', as: 'productRelation'})
if (process.env.NODE_ENV !== 'productivo') {
    const syncDB = async () => await exports.sequelize.sync();
    syncDB();
}