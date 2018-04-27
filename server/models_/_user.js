const Sequelize = require('sequelize');

module.exports = db => db.define('user', {
	id: {
  	type: Sequelize.INTEGER,
  	autoIncrement: true,
  	primaryKey: true
	},
	first_name: {
		type: Sequelize.STRING(30),
		allowNull: false
	},
	last_name: {
		type: Sequelize.STRING(30),
		allowNull: false
	},
	facebookId: {
		type: Sequelize.STRING(100),
		allowNull: true,
		unique: true
	},
	email: {
  	type: Sequelize.STRING(100),
		allowNull: false,
		validate: { isEmail: true },
		unique: true
	},
	email_verified: {
  	type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	phone: {
  	type: Sequelize.STRING(15),
		allowNull: false,
		validate: { isNumeric: true },
		unique: true
	},
	terms_agreed: {
  	type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	is_student: {
  	type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	has_guarantor: {
  	type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	image_url: {
		type: Sequelize.STRING(500),
		allowNull: true,
		validate: { isUrl: true }
	}
});
