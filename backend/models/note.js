const mdlName = "note";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  // mdl.associate = function (models) {
  //   mdl.belongsTo(models.user, {foreignKey: "user_id"})
  // };

  return mdl;
};
