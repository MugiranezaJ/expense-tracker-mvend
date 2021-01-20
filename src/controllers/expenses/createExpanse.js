import db from '../../models'

export const createExpense = (req, res, next) => {
    const  number = req.body.number
    const amount = req.body.amount
    const total = amount * number
    const expense = {
        name: req.body.name,
        amount: total, 
        number: number,
        categoryId: req.body.categoryId, 
    }
    db.Expenses.create(expense)
        .then(data => {
            res.status(201).json({message : `Category ${expense.name} created`})
        })
        .catch(err => {
            if(err.parent.errno){
                res.status(400).json({message: "category id does not exist"})
            }
            next(err)
        })
}