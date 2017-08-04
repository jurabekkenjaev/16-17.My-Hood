module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define("Search", {
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
  });
  return Search;
};