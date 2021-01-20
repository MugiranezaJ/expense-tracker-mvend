import db from '../../models'

export const updateExpense = (req, res) => {
    const toBeUpdated = req.body.toBeUpdated
    const expenseId = req.params.id

    db.Expenses.update(toBeUpdated, {where: {id:expenseId}})
        .then(result => {
            res.status(200).json(result[0] ? {message : "Expenses updated"} : {message: 'id does not exist'})
        })
        .catch(err => {
            throw new BadRequestError(err)
        })
}