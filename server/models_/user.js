const Sequelize = require("sequelize");

module.exports = db =>
  db.define("Users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    facebookId: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: true
    },
    googleId: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: true
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING(15),
      allowNull: true,
      validate: { isNumeric: true },
      unique: true
    },
    imageUrl: {
      type: Sequelize.STRING(500),
      allowNull: true,
      validate: { isUrl: true }
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: true,
      validate: { isEmail: true },
      unique: true
    },
    lastTestDate: {
      type: Sequelize.DATE,
      allowNull: true,
      secondaryKey: true
    }
  });
