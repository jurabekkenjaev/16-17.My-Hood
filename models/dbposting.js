var Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
        is: ["^[a-z]+$",'i'],
        notEmpty: true  
      }
    },
    town: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
        is: ["^[a-z]+$",'i'],
        notEmpty: true   
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Breakfast"
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
        notEmpty: true   
      }
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
        notEmpty: true   
      }
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200],
        notEmpty: true   
      }
    }
  });
  return Post;
};