import { mapAmountToCategory } from "../../services/mapAmountToCategory"
import db from '../../models'

export const viewCategories = (req, res) => {
    const categoryId = req.params.id
    let sql ={ id : categoryId}
    if(categoryId){
        db.Categories.findAll({where: sql})
        .then(category => {
            category.length 
            ? res.status(200).json(category)
            : res.status(404).json({message:"No related record found!"})
        })
    }else{
        
        db.Categories.findAndCountAll()
        .then(categories => {
            categories.rows.length
            ? mapAmountToCategory(res, categories.rows)
            : res.status(404).json({message:"No record found!"})
        })
    }
}