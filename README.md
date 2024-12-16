# Effective Mobile Test
### This is set tasks for checking employer my skills on NodeJS and nestjs.

## Dear Effective Mobile
Thank you for the opportunity to work on this test assignment 🙏. Unfortunately, I couldn’t complete it in full due to my university exams session 📚. However, I made sure the submitted work is accurate and well-structured ✍️, and I hope you’ll appreciate the quality of the material 😊.

# API Documentation

## General Information
- **Base URL:** `http://localhost:{{PORT}}/api`

---

### 1. Create Product

**Description:** Creates a new product.

- **Method:** `POST`
- **URL:** `/create-product`
- **Request Body (JSON):**
  ```json
  {
      "plu": 102,
      "productName": "apple-sadovie"
  }
- **Response:** No response data provided.

### 2. Get Product

**Description:** Retrieves product details by name.

- **Method:** `GET`
- **URL:** `/gain-product`
- **Query Parameters:**
    - **`name`**: Name of the product (e.g., `apple`)
- **Example Full URL:**`http://localhost:{{PORT}}/api/gain-product?name=apple`
- **Response:** No response data provided.

### 3. Get Product

**Description:** Creates stock information for a product.

- **Method:** `POST`
- **URL:** `/create-stock`
- **Request Body (JSON):**
  ```json
  {
    "plu": 102,
    "storeId": 2,
    "quantityShop": 20,
    "quantityStock": 1
  }
- **Response:** No response data provided.

### 4. Increase Stock

**Description:** Increases the stock quantity.

- **Method:** `PUT`
- **URL:** `/increase-stock`
- **Request Body (JSON):**
  ```json
  {
    "stockId": 3,
    "quantity": 100,
    "place": "order"
  }
- **Response:** No response data provided.

### 5. Decrease Stock

**Description:** Decreases the stock quantity.

- **Method:** `PUT`
- **URL:** `/decrease-stock`
- **Request Body (JSON):**
  ```json
  {
    "stockId": 3,
    "quantity": 1,
    "place": "order"
  }
- **Response:** No response data provided.

### 6. Get Stocks by Filters

**Description:** Retrieves stock data based on filters.

- **Method:** `GET`
- **URL:** `/get-stocks`
- **Query Parameters:**
    - **`plu`**: Product lookup number (e.g., `101`)
    - **`storeId`**: Name of the product (e.g., `2`)
- **Example Full URL:**`http://localhost:{{PORT}}/api/get-stocks?plu=101&storeId=2`
- **Response:** No response data provided.