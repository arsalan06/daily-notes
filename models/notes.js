'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notes.belongsTo(models.User,{foreignKey:"userId"})
    }
  }
  Notes.init({
    heading: {
      type:DataTypes.STRING,
      allowNull:false
    },
    subHeading:{
      type:DataTypes.JSON,
      allowNull:false
    },
    status:{
      type:DataTypes.STRING,
      defaultValue:"inComplete"
    }
  }, {
    sequelize,
    modelName: 'Notes',
  });
  return Notes;
};