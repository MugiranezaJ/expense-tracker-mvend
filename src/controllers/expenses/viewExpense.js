const { con } = require("../../config/dbConnection")
import sequelize from 'sequelize'
import db from '../../models'

export const viewExpense = (req, res) => {
    const expenseId = req.params.id
    const categoryId = req.query.categoryId
    const query = expenseId ? {id:expenseId} : {categoryId:categoryId}
    if(expenseId){
        db.Expenses.findAll({where: query})
        .then(data => {
            data.length 
            ? res.status(200).json(data)
            : res.status(404).json({message:"No related record found!"})
        })
    }else if(categoryId){
        const amount = [sequelize.fn('SUM', sequelize.col('amount')), 'total_amount']
        db.Expenses.findAll({where: query})
        
        .then(data => {
            db.Expenses.findAll({attributes:[amount], where: {categoryId: categoryId}})
                .then(res_total => {
                    data.length
                        ? res.status(200).json( Object.assign({}, {data}, res_total[0].dataValues))
                        : res.status(404).json({message:"No record found!"})
                })
            
        })
    }else{
        res.status(400).json({message:"No id found"})
    }
}