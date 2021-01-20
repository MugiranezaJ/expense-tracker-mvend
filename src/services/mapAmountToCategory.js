import sequelize from "sequelize"
import db from '../models'


export const mapAmountToCategory = async (res, categories = []) => {
    const categoryContainer = []
    let counter = categories.length
    for( const category of categories) {
        const amount = [sequelize.fn('SUM', sequelize.col('amount')), 'total_amount']
        db.Expenses.findAll({attributes:[amount], where: {categoryId: category.id}})
            .then(result => {
                counter -= 1
                const mapped = {category:category, ...result[0].dataValues}
                categoryContainer.push(mapped)
                if(counter == 0){
                    res.status(200).json(categoryContainer)
                }
            })
            .catch(err => {
                res.status(400).json(err)
            })
        
    }
}