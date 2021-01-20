import db from '../../models'

export const deleteCategory = (req, res, next) => {
    const categoryId = req.params.id
    const query = {id:categoryId}

    db.Categories.destroy({where : query})
        .then(result => {
            result 
            ? res.status(200).json({message : `Category with ${categoryId} id deleted`})
            : res.status(404).json({message : `Expenses does not exist`})
        })
        .catch(err => {
            switch (err.parent.errno) {
                case 1451:
                    res.status(205).json({message : "Can not delete this category because it is referenced to"})
                    break;
                default:
                    next(err)
                    break;
            }
            
        })
}