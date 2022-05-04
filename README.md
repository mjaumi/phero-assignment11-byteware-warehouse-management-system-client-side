# Byteware Warehouse Management System

### Live Website Link: [https://byteware-warehouse-management.web.app](https://byteware-warehouse-management.web.app)

## Project Description

`Byteware` is a warehouse management system which manages a **laptop warehouse**. In this management system, user can see all the inventory items, can see a specific inventory item's detailed information, can add a new inventory item, can delete any existing inventory item etc. TO do all the tasks mentioned above, the user must be logged in to the website. User can sign up to website as well.

## Features

- User can see only **six** inventory items in the home page.
- User must go to **Manage Inventory** page to see all the inventory items.
- User will go to **Inventory** page by clicking on the **Update Stock** button of the inventory item cards.
- There is a button in the **Inventory** page named **Delivered** by clicking which the quantity of the current item will decrease by one.
- There is a small form in the **Inventory** page where user can restock the current item.
- There is a page named **Add Inventory Items** where user can add inventory item by simply filling up the given form.
- There is a page named **My Items** where user can see those inventory items which he/she added.
- User can delete any existing inventory items by clicking on the **Delete** button in the **Manage Inventory** page or the **My Items** page.
- In order to **see, add, delete or update** items, user must be **logged in** to the website.
- A **JSON Web Token** is implemented in the **My Items** page to secure the API.
- While loading data, a **Spinner** will be shown to the user.

## Technologies Used

    #### Client-Side
        - ReactJS Library.
        - React Router Library.
        - React Helmet Library.
        - React Toastify Library.
        - Tailwind CSS Framework.
        - Tailwind Elements Library.
        - Tailwind Starter Kit Library.
        - Firebase For Authentication & Hosting.
        - React Firebase Hooks Library.
        - Heroicons Icon Library.
        - Fontawesome Icon Library.

    #### Server-Side
        - ExpressJS Node Framework.
        - Cors Library.
        - Dotenv Library.
        - Nodemon Library.
        - Json Web Token Library.
        - MongoDB For storing data.
        - Heroku For Server Hosting.
