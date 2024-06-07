const { Sequelize } = require('sequelize');
require('dotenv').config(); // Adicione esta linha para garantir que as variáveis de ambiente sejam carregadas

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
  }
);

module.exports = sequelize;
