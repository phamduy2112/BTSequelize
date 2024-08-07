import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class restaurant extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    res_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    desc_res: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'restaurant',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "res_id" },
        ]
      },
    ]
  });
  }
}
