'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ MeetGreet, SetTime }) {
      // meet and greets 
      Band.hasMany(MeetGreet, {
        foreignKey: "meet_greet_id",
        as: "meet_greets"
      })

      // set times
      Band.hasMany(SetTime, {
        foreignKey: "set_time_id",
        set_times: "set_times"
      })
  }
  
  }
  Band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  })
  return Band
}