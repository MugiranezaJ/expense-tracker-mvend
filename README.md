# expense-tracker-mvend
<<<<<<< HEAD
A restApi project for expense tracking system.

**Running the codes**

Create database and create ```.env``` file. 
In ```.env``` populate it with database credentials using these keywords:
``` M_DATABASE, M_PORT,M_PASSWORD, M_USER, M_HOST ```.

In commandline type:
```
1. npm run migrate
2. npm run seed (to insert default/test data)
3. npm run devStart
```
***Default ```api_key=IuhIdTqYfs```***

### Endpoints
To make any request to one of these endpoint you must pass api_key to the request header.

**Signup**

- get an api_key : POST [/signup]()

**Categories**
- create categories : POST [/expense/category/]()
- view categories : GET [/expense/category/]()
- view categories : GET [/expense/category/]()
- update categories : PATCH [/expense/category/:id]()

**Expenses**
- create expense : POST [/expense/]()
- view expense : GET [/expense/:id]()
- update expense : PATCH [/expense/:id]()
- delete expense : DELETE [/expense/:id]()
=======
A restApi project for expense tracking
>>>>>>> 448c740... Create README.md
