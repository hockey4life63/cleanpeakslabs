module.exports = function(sequelize, DataTypes) {

/*
/////object need from post request/////
userObj ={
  user_name,
  password,
  first_name,
  last_name,
  company,
  address,
  city,
  state,
  email,
  phone_number,
  services_requested,
  samples_seposited
}
*/

 var User = sequelize.define("User", {
    user_name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[4,35]
      }
    },
    data_entry:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    },
    admin:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
    pw_hash:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    uuid:{
      type:DataTypes.STRING,
    },

    first_name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[0, 30]
      }
    },
    last_name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[0, 30]
      }
    },
    company:{
      type:DataTypes.STRING
    },
    address:{
      type:DataTypes.STRING,
      allowNull:false
    },
    city:{
      type:DataTypes.STRING,
      allowNull:false
    },
    state:{
      type:DataTypes.STRING,
      defaultValue: "CA"
    },
    email:{
      type:DataTypes.STRING,
        allowNull:false,
        validate:{
          isEmail:true
        }
      },
    phone_number:{
      type:DataTypes.STRING,
        allowNull:false,
        validate:{
          ilen:[10,10]
        }
    },

    primary_potency:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },

    primary_terpene:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },

    residual_solvents:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    services_requested:{
      type:DataTypes.INTEGER
    },
    samples_deposited:{
      type:DataTypes.INTEGER
    }

  });


 User.associate = function(models) {
    User.hasMany(models.Test_Result, {});
    User.hasMany(models.Sale, {});

  };

  return User;

};



