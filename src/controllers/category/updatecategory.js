import { con } from "../../config/dbConnection"
import db from '../../models'
import BadRequestError from "../../utils/badRequest"

export const updateCategory = (req, res) => {
    const categoryId = req.params.id
    const newCategoryName = req.body.name
    db.Categories.update({name:newCategoryName}, {where: {id:categoryId}})
        .then(result => {
            res.status(200).json(result[0] ? {message : `Category updated to ${newCategoryName}`} : {message: 'No change or id does not exist'})
        })
        .catch(err => {
            throw new BadRequestError(err)
        })
}