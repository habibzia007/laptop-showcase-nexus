
-- Create laptops table
CREATE TABLE IF NOT EXISTS `laptops` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `company` VARCHAR(100) NOT NULL,
  `model` VARCHAR(100) NOT NULL,
  `size` VARCHAR(50),
  `price` DECIMAL(10,2) NOT NULL,
  `hdd` VARCHAR(50),
  `ram` VARCHAR(50),
  `cpu` VARCHAR(100),
  `vga` VARCHAR(100),
  `images` JSON,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert some initial data
INSERT INTO `laptops` 
  (company, model, size, price, hdd, ram, cpu, vga, images)
VALUES 
  ('Apple', 'MacBook Pro 16', '16"', 2499.99, '1TB SSD', '32GB DDR4', 'Apple M2 Max', 'Apple Integrated', 
   JSON_ARRAY('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000', 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000')),
  
  ('Dell', 'XPS 15', '15.6"', 1899.99, '512GB SSD', '16GB DDR4', 'Intel Core i9-12900HK', 'NVIDIA GeForce RTX 3050 Ti', 
   JSON_ARRAY('https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000', 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=1000')),
  
  ('Lenovo', 'ThinkPad X1 Carbon', '14"', 1399.99, '1TB SSD', '16GB DDR4', 'Intel Core i7-1260P', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000', 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1000'));
