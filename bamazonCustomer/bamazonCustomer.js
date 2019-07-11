var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "flyguy89",
  database: 'bamazon_db'
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function queryProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
    }
    console.log("-----------------------------------");
    inquirer.prompt([
      {
        type: "input",
        message: "What is the Item ID of the product you would like to buy?",
        name: "product",
        filter: Number
      },

      {
        type: "input",
        name: "quantity",
        message: "How many units of this product would you like to buy?",
        filter: Number
      }
    ]).then(function (answer) {

      checkQuantity(answer)


    });
  });
}

function productInfo() {
  queryProducts()

};
function checkQuantity(item){
  if (item.product !== "") {

    console.log(item.product);
  }
  connection.query("SELECT * FROM products where item_id =?",[item.product], function(err, result) {
    for (var i = 0; i < result.length; i++) {
      console.log(result[i].item_id + " | " + result[i].product_name + " | " + result[i].department_name + " | " + result[i].price + " | " + result[i].stock_quantity);
    }if (item.quantity < result[0].stock_quantity){
      console.log('Congratulations, your item is in stock!')
      start();

     } if (result.length === 0) {
      console.log('ERROR: Select a valid Item ID from the Products list.');
      start();
    }
    if (item.quantity > result[0].stock_quantity){
      console.log('ERROR: Insufficient quantity.')
      start();
    } else {


      //  selected 3 updates stock quantity for given item id
      var newQuantity = result[0].stock_quantity - item.quantity;
      updateQuantity (item, newQuantity )
    }
    });



}
function updateQuantity(item, quantity){
  // var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (res[0].stock_quantity - quantity) + ' WHERE item_id = ' + item;

  console.log("updating quantity");
  connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?",[quantity, item.product], function(err, res) {
    if (err) throw err;
    console.log("UPDATE Successful")
  });
};

function start(){
  productInfo()
}
