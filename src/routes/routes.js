import express from 'express'
import { createCategory } from '../controllers/category/createCategory'
import { deleteCategory } from '../controllers/category/deleteCategory'
import { updateCategory } from '../controllers/category/updatecategory'
import { viewCategories } from '../controllers/category/viewcategories'
import { createExpense } from '../controllers/expenses/createExpanse'
import { viewExpense } from '../controllers/expenses/viewExpense'
import { updateExpense } from '../controllers/expenses/updateExpense'
import { deleteExpense } from '../controllers/expenses/deleteExpense'
import { validateSignup } from '../middlewires/validateSignup'
import { validateExpenseCreate, validateExpenseUpdate, validateExpenseView } from '../middlewires/validateExpenses'
import { validateCategoryCreate, validateCategoryUpdate } from '../middlewires/validateCategories'
import authanticate from '../helper/authanticate'
import { signup } from '../controllers/user/login'

const router = express.Router()

router.post('/signup', validateSignup, signup)

router.post('/expense/category/', authanticate, validateCategoryCreate, createCategory)
router.delete('/expense/category/:id', authanticate, deleteCategory)
router.patch('/expense/category/:id', authanticate, validateCategoryUpdate, updateCategory)
router.get('/expense/category/:id', authanticate, viewCategories)
router.get('/expense/category/', authanticate, viewCategories)

router.post('/expense/', authanticate, validateExpenseCreate, createExpense)
router.get('/expense/:id', authanticate, validateExpenseView, viewExpense)
router.get('/expense/', authanticate, validateExpenseView, viewExpense)
router.patch('/expense/:id', authanticate, validateExpenseUpdate, updateExpense)
router.delete('/expense/:id', authanticate, deleteExpense)

export default router