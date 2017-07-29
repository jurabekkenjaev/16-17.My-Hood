var connection = require("./connection.js");

module.exports = function(sequelize, DataTypes) {
  var information = sequelize.define("information", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150],
        isEmail: true,
        notEmpty: true  
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
        is: ["^[a-z]+$",'i'],
        notEmpty: true  
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
        notEmpty: true   
      }
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
        notEmpty: true   
      }
    },
    vlocation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
        notEmpty: true   
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 300],
        is: ["^[a-z]+$",'i'],
        notEmpty: true  
      }
    },
    picture: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 140],
        isUrl: true, 
      }
    },
    vote: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 140]
      }
    },
  });
  return information;
};
