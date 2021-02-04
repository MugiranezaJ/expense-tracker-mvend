import db from '../../models'

export const createCategory = (req, res, next) => {
    const categoryName = req.body.name
    db.Categories.create(req.body)
        .then(data => {
            res.status(201).json({message : `Category ${categoryName} created`})
        })
        .catch(err => {
            next(err.errors[0])
        })
}