const db = require("../db");

const User = require("./user")(db);
const Test = require("./test")(db);

User.hasMany(Test, {
  as: "Tests",
  foreignKey: "userId",
  sourceKey: "id",
  onDelete: "cascade"
});
Test.belongsTo(User, { as: "User", foreignKey: "userId", targetKey: "id" });

const models = {
  User,
  Test
};

module.exports = models;
