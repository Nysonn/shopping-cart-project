-- 1. Create the products table
CREATE TABLE products (
  id          SERIAL PRIMARY KEY,       -- auto-incrementing ID
  name        TEXT    NOT NULL,         -- product name
  category    TEXT,                     -- fruit, vegetable, etc.
  price       INTEGER NOT NULL,         -- price in smallest currency unit (e.g. cents/UGX)
  image_url   TEXT,                     -- URL to the product image
  rating      NUMERIC(2,1),             -- rating like 4.5
  reviews     INTEGER,                  -- number of reviews
  is_organic  BOOLEAN DEFAULT FALSE     -- organic flag
);
