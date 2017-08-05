module.exports = function(sequelize, DataTypes) {

   var Sale = sequelize.define("Sale", {
    

      

      primary_potency:{
        type:DataTypes.INTEGER,
        defaultValue:0
      },

      primary_Terpene:{
        type:DataTypes.INTEGER,
        defaultValue:0
      },

      residual_solvents:{
        type:DataTypes.INTEGER,
        defaultValue:0
      },
      samples_amounts:{
        type:DataTypes.INTEGER
      },
      samples_cost_per:{
        type:DataTypes.FLOAT
      },
      total_cost:{
        type:DataTypes.FLOAT
      }


    });


  Sale.associate = function(models) {
      Sale.hasMany(models.Test_Result, {});
      Sale.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
  };
  return Sale;
};


