﻿# junior-developer-task

## scandiweb Junior Developer test assignment

### The expected outcome of the test

A web-app (accessible by an URL) containing two pages for:

1. Product list page
2. Adding a product page

**Demo Link:**  https://octupled-duty.000webhostapp.com/

## Project Overview

### Product List Page
![image](https://github.com/MennaAnwar/junior-developer-task/assets/79084467/d309b2a6-9489-4fb8-bece-aa8748e7e244)

- Accessible at the root URL `/`.
- Displays a list of products sorted by the primary key in the database.
- Each product entry must include:
  - SKU (unique identifier)
  - Name
  - Price in $
  - One product-specific attribute (Size for DVD, Weight for Book, Dimensions for Furniture)
- Required UI elements:
  - "ADD" button leading to the Add Product page.
  - "MASS DELETE" functionality implemented via checkboxes and a delete button.
- No pagination; all products should be listed on a single page.

### Add Product Page
![image](https://github.com/MennaAnwar/junior-developer-task/assets/79084467/98969b5d-3cd1-43d8-848f-9db0f193adca)

- Accessible at `/add-product`.
- Form with the following fields:
  - SKU
  - Name
  - Price
  - Product Type Switcher (DVD, Book, Furniture)
  - Product-specific attributes (Size for DVD, Weight for Book, Dimensions for Furniture)
- Dynamic form behavior based on the selected product type.
- Validation for mandatory fields and proper data types.
- Notifications for missing or invalid data should appear without reloading the page.
- "Save" button to save the product and return to the Product List page.
- "Cancel" button to discard changes and return to the Product List page.

## General Requirements
- Utilize OOP principles, avoiding conditional statements to handle product type differences.
- Meet PSR standards.
- Use one general endpoint for saving products.
- Implement MySQL logic using classes with properties, setters, and getters.
- Use PHP 7.0 or higher, plain classes, and avoid frameworks.
- Optional: jQuery, Bootstrap, SASS.
- MySQL 5.6 or higher.

## Auto Test Results:
![image](https://github.com/MennaAnwar/junior-developer-task/assets/79084467/90f3d8e5-b8cb-44b1-97b3-3253d952e366)
![image](https://github.com/MennaAnwar/junior-developer-task/assets/79084467/e16279ae-16ff-4266-b8d1-77bdb57883f6)
![image](https://github.com/MennaAnwar/junior-developer-task/assets/79084467/c135979a-d7f8-4da2-9b4d-855dab3bc3e7)
![image](https://github.com/MennaAnwar/junior-developer-task/assets/79084467/aa6938c8-0378-4e07-8d6d-20232874d695)




