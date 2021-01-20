import express from 'express'
import { createCategory } from '../controllers/category/createCategory'
import { deleteCategory } from '../controllers/category/deleteCategory'
import { updateCategory } from '../controllers/category/updatecategory'
import { viewCategories } from '../controllers/category/viewcategories'
import { createExpense } from '../controllers/expenses/createExpanse'
import { viewExpense } from '../controllers/expenses/viewExpense'
import { updateExpense } from '../controllers/expenses/updateExpense'
import { deleteExpense } from '../controllers/expenses/deleteExpense'
import { validateExpenseCreate, validateExpenseUpdate, validateExpenseView } from '../middlewires/validateExpenses'
import { validateCategoryCreate, validateCategoryUpdate } from '../middlewires/validateCategories'

const router = express.Router()

router.post('/expense/category/', validateCategoryCreate, createCategory)
router.delete('/expense/category/:id', deleteCategory)
router.patch('/expense/category/:id', validateCategoryUpdate, updateCategory)
router.get('/expense/category/:id', viewCategories)
router.get('/expense/category/', viewCategories)

router.post('/expense/', validateExpenseCreate, createExpense)
router.get('/expense/:id', validateExpenseView, viewExpense)
router.get('/expense/', validateExpenseView, viewExpense)
router.patch('/expense/:id', validateExpenseUpdate, updateExpense)
router.delete('/expense/:id', deleteExpense)

export default router