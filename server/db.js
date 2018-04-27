const config = require("./config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.pg.dbName,
  config.pg.username,
  config.pg.password,
  {
    host: config.pg.host || "localhost",
    dialect: "postgres",
    port: config.pg.port || 5432
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
// sequelize.sync({ force: true }).then(() => console.log("synced"));
// sequelize
//   .sync() //.then(() => console.log('synced'))
//   .then(() => {
//     const models = require("./models");
//     for (let model of Object.keys(models)) {
//       if (!models[model].name) continue;

//       console.log(
//         "\n\n----------------------------------\n",
//         models[model].name,
//         "\n----------------------------------"
//       );
//       for (let assoc of Object.keys(models[model].associations)) {
//         for (let accessor of Object.keys(
//           models[model].associations[assoc].accessors
//         )) {
//           console.log(
//             models[model].name +
//               "." +
//               models[model].associations[assoc].accessors[accessor] +
//               "()"
//           );
//         }
//       }
//     }
//   })
//   .then(console.log);
require("sequelize-values")(sequelize);
module.exports = sequelize;
