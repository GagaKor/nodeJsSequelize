"use strict";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      _id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "user",
    }
  );
};
