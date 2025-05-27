-- name: GetAllProducts :many
-- Retrieves all products from the products table.
SELECT
  id,
  name,
  category,
  price,
  image_url,
  rating,
  reviews,
  is_organic
FROM products
ORDER BY id;
