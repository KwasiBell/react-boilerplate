DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(15) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(40) NOT NULL,
	department_name VARCHAR(40) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(15) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Air Jordan 11s', 'Clothing', 220.00, 10),
		('Sony 60 inch TV', 'Electronics', 500.00, 25),
		('Cheese Puffs', 'Food', 2.50, 80),
		('Surpreme T-shirt', 'Clothing', 75.00, 3),
		('Bluetooth Soundbar', 'Electronics', 50.00, 15),
		('The Art of War', 'Book', 5.99, 17),
		('Protein Shake', 'Health', 10.50, 30),
		('Amiri Jeans', 'Clothing', 1050.45, 5),
		('Daily Vitamins', 'Health', 11.25, 135),
		('Apple Airpod Earphones', 'Electronics', 215.75, 63),
		('1000 piece puzzle', 'Boardgames', 15.85, 49);