const Sequelize = require("sequelize");

module.exports = db =>
  db.define("Tests", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: Sequelize.INTEGER,
      foreignKey: true,
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      }
    },
    mark: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    passed: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  });
