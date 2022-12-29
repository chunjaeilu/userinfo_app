const { Sequelize, DataTypes } = require("sequelize");

// DB 생성
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

// Model 생성
const UserInfos = sequelize.define("UserInfos", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Model 출력
module.exports = { sequelize, UserInfos };
