let db = require("../models");

let products = [
  {
    product_name: "PS4 Pro",
    department_name: "Gaming Consoles",
    price: 400.00,
    stock_quantity: 30
  },
  {
    product_name: "PS4 Slim",
    department_name: "Gaming Consoles",
    price: 300.00,
    stock_quantity: 30
  },
  {
    product_name: "Nintendo Switch",
    department_name: "Gaming Consoles",
    price: 350.00,
    stock_quantity: 15
  },
  {
    product_name: "Nintendo Switch Lite",
    department_name: "Gaming Consoles",
    price: 250.00,
    stock_quantity: 15
  },
  {
    product_name: "Macbook Pro",
    department_name: "Computers",
    price: 1500.00,
    stock_quantity: 10
  },
  {
    product_name: "Macbook Air",
    department_name: "Computers",
    price: 1000.00,
    stock_quantity: 10
  },
  {
    product_name: "4K TV",
    department_name: "Televisions",
    price: 350.00,
    stock_quantity: 5
  },
  {
    product_name: "HD TV",
    department_name: "Televisions",
    price: 350.00,
    stock_quantity: 5
  },
  {
    product_name: "PSVR",
    department_name: "Gaming Accesories",
    price: 300.00,
    stock_quantity: 10
  },
  {
    product_name: "Air Pods",
    department_name: "Headphones",
    price: 200.00,
    stock_quantity: 50
  }
];

db.sequelize.sync({ force: true })
.then(function() {
  db.Product.bulkCreate(products)
    .then(function(dbPost) {
      console.log("\n\nINSERTED\n\n");
      db.sequelize.close();
    })
});