module.exports = function(sequelize, DataTypes) {

 var Test_Result = sequelize.define("Test_Result", {
    company:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:{
          args:[0,30]
        }
      }
    },

    primary_potency:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },

    primary_Terpene:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },

    residual_solvents:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },

    sample_type:{
      type:DataTypes.STRING,
      allowNull:false
    },

    d9_thc:{
      type: DataTypes.FLOAT
    },

    cbd :{
      type: DataTypes.FLOAT
    },
    cbn :{
      type: DataTypes.FLOAT
    },
    a_pinene :{
      type: DataTypes.FLOAT
    },
    b_pinene :{
      type: DataTypes.FLOAT
    },
    limonene :{
      type: DataTypes.FLOAT
    },
    linalool :{
      type: DataTypes.FLOAT
    },
    b_caryophyllene :{
      type: DataTypes.FLOAT
    },
    butane_ppm :{
      type: DataTypes.FLOAT
    },
    methanol_ppm :{
      type: DataTypes.FLOAT
    },
    ethanol_ppm :{
      type: DataTypes.FLOAT
    },
    acetone_ppm :{
      type: DataTypes.FLOAT
    },
  });

 Test_Result.associate = function(models) {
    Test_Result.belongsTo(models.Sale, {
      foreignKey: {
        allowNull: false
      }
    });
    Test_Result.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Test_Result;
};

