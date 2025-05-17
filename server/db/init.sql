
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

-- Insert 30 laptop products with realistic specifications and image URLs
INSERT INTO `laptops` 
  (company, model, size, price, hdd, ram, cpu, vga, images)
VALUES 
  ('Apple', 'MacBook Pro 16', '16"', 2499.99, '1TB SSD', '32GB DDR4', 'Apple M2 Max', 'Apple Integrated', 
   JSON_ARRAY('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000', 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000')),
  
  ('Dell', 'XPS 15', '15.6"', 1899.99, '512GB SSD', '16GB DDR4', 'Intel Core i9-12900HK', 'NVIDIA GeForce RTX 3050 Ti', 
   JSON_ARRAY('https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000', 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=1000')),
  
  ('Lenovo', 'ThinkPad X1 Carbon', '14"', 1399.99, '1TB SSD', '16GB DDR4', 'Intel Core i7-1260P', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000', 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1000')),

  ('HP', 'Spectre x360', '13.3"', 1299.99, '512GB SSD', '16GB DDR4', 'Intel Core i7-1260P', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000', 'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?q=80&w=1000')),
  
  ('Asus', 'ROG Zephyrus G14', '14"', 1599.99, '1TB SSD', '16GB DDR4', 'AMD Ryzen 9 6900HS', 'NVIDIA GeForce RTX 3060', 
   JSON_ARRAY('https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000', 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?q=80&w=1000')),
  
  ('Razer', 'Blade 15', '15.6"', 2299.99, '1TB SSD', '32GB DDR5', 'Intel Core i9-12900H', 'NVIDIA GeForce RTX 3080 Ti', 
   JSON_ARRAY('https://images.unsplash.com/photo-1525971977657-951750dc9b5f?q=80&w=1000', 'https://images.unsplash.com/photo-1661961110372-8a7682543120?q=80&w=1000')),
  
  ('MSI', 'GS66 Stealth', '15.6"', 1999.99, '2TB SSD', '32GB DDR4', 'Intel Core i7-12700H', 'NVIDIA GeForce RTX 3070 Ti', 
   JSON_ARRAY('https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?q=80&w=1000', 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1000')),
  
  ('Microsoft', 'Surface Laptop Studio', '14.4"', 1799.99, '512GB SSD', '16GB DDR4', 'Intel Core i7-11370H', 'NVIDIA GeForce RTX 3050 Ti', 
   JSON_ARRAY('https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=1000', 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1000')),
  
  ('Acer', 'Predator Triton 500', '15.6"', 1699.99, '1TB SSD', '16GB DDR4', 'Intel Core i7-11800H', 'NVIDIA GeForce RTX 3070', 
   JSON_ARRAY('https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1000', 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=1000')),
  
  ('Alienware', 'm15 R7', '15.6"', 2499.99, '2TB SSD', '32GB DDR5', 'AMD Ryzen 9 6900HX', 'NVIDIA GeForce RTX 3080', 
   JSON_ARRAY('https://images.unsplash.com/photo-1605134513573-384dcf99a37c?q=80&w=1000', 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1000')),
  
  ('Apple', 'MacBook Air M2', '13.6"', 1199.99, '512GB SSD', '16GB DDR4', 'Apple M2', 'Apple Integrated', 
   JSON_ARRAY('https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000', 'https://images.unsplash.com/photo-1583223667854-e2d76d40f034?q=80&w=1000')),
  
  ('Dell', 'G15 Gaming Laptop', '15.6"', 1299.99, '1TB SSD', '16GB DDR4', 'Intel Core i7-11800H', 'NVIDIA GeForce RTX 3060', 
   JSON_ARRAY('https://images.unsplash.com/photo-1536667842290-1f95b9f0ef2e?q=80&w=1000', 'https://images.unsplash.com/photo-1548611716-ad782502c9d2?q=80&w=1000')),
  
  ('Lenovo', 'Legion 5 Pro', '16"', 1599.99, '1TB SSD', '16GB DDR4', 'AMD Ryzen 7 5800H', 'NVIDIA GeForce RTX 3070', 
   JSON_ARRAY('https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?q=80&w=1000', 'https://images.unsplash.com/photo-1624571409108-e9a41746af53?q=80&w=1000')),
  
  ('HP', 'OMEN 16', '16.1"', 1499.99, '1TB SSD', '16GB DDR4', 'AMD Ryzen 7 6800H', 'NVIDIA GeForce RTX 3060', 
   JSON_ARRAY('https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?q=80&w=1000', 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1000')),
  
  ('Asus', 'ZenBook Pro 14 Duo OLED', '14"', 1999.99, '1TB SSD', '16GB DDR5', 'Intel Core i7-12700H', 'NVIDIA GeForce RTX 3050 Ti', 
   JSON_ARRAY('https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1000', 'https://images.unsplash.com/photo-1636211990414-8edcc63d2599?q=80&w=1000')),
  
  ('Samsung', 'Galaxy Book3 Pro 360', '16"', 1699.99, '512GB SSD', '16GB DDR4', 'Intel Core i7-1360P', 'Intel Arc Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=1000', 'https://images.unsplash.com/photo-1544499090-8b4f0620faa5?q=80&w=1000')),
  
  ('LG', 'Gram 17', '17"', 1599.99, '1TB SSD', '16GB DDR4', 'Intel Core i7-1360P', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1544099858-75feeb57f01b?q=80&w=1000', 'https://images.unsplash.com/photo-1579362243203-939ffbf81048?q=80&w=1000')),
  
  ('Google', 'Pixelbook Go', '13.3"', 849.99, '256GB SSD', '8GB DDR4', 'Intel Core i5-8200Y', 'Intel UHD Graphics 615', 
   JSON_ARRAY('https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&w=1000', 'https://images.unsplash.com/photo-1512429559910-95c3f50b0e7b?q=80&w=1000')),
  
  ('Huawei', 'MateBook X Pro', '14.2"', 1499.99, '1TB SSD', '16GB DDR4', 'Intel Core i7-1260P', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000')),
  
  ('Acer', 'Swift 5', '14"', 999.99, '512GB SSD', '16GB DDR4', 'Intel Core i7-1255U', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=1000', 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000')),
  
  ('Microsoft', 'Surface Laptop 5', '13.5"', 1299.99, '512GB SSD', '16GB DDR4', 'Intel Core i7-1255U', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1630794339410-28430847be73?q=80&w=1000', 'https://images.unsplash.com/photo-1624571409108-e9a41746af53?q=80&w=1000')),
  
  ('Lenovo', 'Yoga 9i', '14"', 1399.99, '1TB SSD', '16GB DDR4', 'Intel Core i7-1260P', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1544099858-75feeb57f01b?q=80&w=1000', 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1000')),
  
  ('HP', 'Pavilion Aero 13', '13.3"', 799.99, '512GB SSD', '16GB DDR4', 'AMD Ryzen 7 5800U', 'AMD Radeon Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=1000', 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1000')),
  
  ('Asus', 'TUF Gaming A15', '15.6"', 1099.99, '512GB SSD', '16GB DDR4', 'AMD Ryzen 7 6800H', 'NVIDIA GeForce RTX 3060', 
   JSON_ARRAY('https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&w=1000', 'https://images.unsplash.com/photo-1636211990414-8edcc63d2599?q=80&w=1000')),
  
  ('Dell', 'Inspiron 16', '16"', 899.99, '512GB SSD', '16GB DDR4', 'Intel Core i7-1255U', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1536667842290-1f95b9f0ef2e?q=80&w=1000', 'https://images.unsplash.com/photo-1548611716-ad782502c9d2?q=80&w=1000')),
  
  ('Lenovo', 'IdeaPad Gaming 3', '15.6"', 899.99, '512GB SSD', '16GB DDR4', 'AMD Ryzen 5 6600H', 'NVIDIA GeForce RTX 3050', 
   JSON_ARRAY('https://images.unsplash.com/photo-1544099858-75feeb57f01b?q=80&w=1000', 'https://images.unsplash.com/photo-1579362243203-939ffbf81048?q=80&w=1000')),
  
  ('MSI', 'Creator Z16', '16"', 2299.99, '1TB SSD', '32GB DDR4', 'Intel Core i7-12700H', 'NVIDIA GeForce RTX 3060', 
   JSON_ARRAY('https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?q=80&w=1000', 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1000')),
  
  ('HP', 'Dragonfly Pro', '14"', 1499.99, '512GB SSD', '16GB DDR5', 'AMD Ryzen 7 7736U', 'AMD Radeon Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?q=80&w=1000', 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000')),
  
  ('Framework', 'Laptop 13', '13.5"', 1199.99, '512GB SSD', '16GB DDR4', 'Intel Core i7-1280P', 'Intel Iris Xe Graphics', 
   JSON_ARRAY('https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=1000', 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000'));
