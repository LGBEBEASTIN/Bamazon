module.exports = function (sequelize, DataTypes) {
    let Product = sequelize.define("Product", {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      stock_quantity: {
          type: DataTypes.INTEGER,
      }
    });
    return Product;
  };