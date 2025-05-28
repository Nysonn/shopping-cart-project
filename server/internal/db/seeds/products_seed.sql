-- internal/db/seeds/products_seed.sql

INSERT INTO products (name, category, price, image_url, rating, reviews, is_organic) VALUES
  ('Organic Apples',   'Fruit',     1000, 'http://localhost:8080/assets/apple-new.jpg',   4.5, 24, TRUE),
  ('Fresh Carrots',    'Vegetable', 2000, 'http://localhost:8080/assets/carrot.jpg',      4.3, 18, FALSE),
  ('Organic Bananas',  'Fruit',     4000, 'http://localhost:8080/assets/banana-pic.jpg',  4.7, 32, TRUE),
  ('Mixed Berries',    'Fruit',     3000, 'http://localhost:8080/assets/berry-pic.jpg',   4.8, 42, TRUE),
  ('Purple Grapes',    'Fruit',     1000, 'http://localhost:8080/assets/grapes-pic.jpg',  4.1, 15, FALSE),
  ('Sweet Melon',      'Fruit',     5000, 'http://localhost:8080/assets/sweet-melon.jpg', 4.6, 28, TRUE),
  ('Juicy Oranges',    'Fruit',     2000, 'http://localhost:8080/assets/oranges-pic.jpg', 4.4, 36, FALSE),
  ('Water Melon',      'Fruit',     5000, 'http://localhost:8080/assets/watermelon.jpg',  4.9, 45, TRUE),
  ('Green Grapes',     'Fruit',     2000, 'http://localhost:8080/assets/grapes-pic.jpg',  4.2, 19, FALSE),
  ('Egg Plant',        'Vegetable', 1500, 'http://localhost:8080/assets/egg-plant.jpg',   3.2, 29, TRUE),
  ('Pineapple',        'Fruit',     4500, 'http://localhost:8080/assets/pineapple.jpg',   4.2, 29, TRUE),
  ('Potato',           'Vegetable', 2500, 'http://localhost:8080/assets/potato.jpg',      3.2, 35, TRUE),
  ('Cucumber',         'Vegetable', 1500, 'http://localhost:8080/assets/cucumber.jpg',    3.5, 29, TRUE),
  ('Onion',            'Vegetable', 2000, 'http://localhost:8080/assets/onion.jpg',       3.2, 39, TRUE),
  ('Cabbage',          'Vegetable', 3500, 'http://localhost:8080/assets/cabbage.jpg',     3.5, 20, TRUE),
  ('Lemon',            'Fruit',     2500, 'http://localhost:8080/assets/lemon.jpg',       3.5, 19, FALSE)
ON CONFLICT DO NOTHING;
