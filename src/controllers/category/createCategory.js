import { con } from "../../config/dbConnection"

export const createCategory = (req, res) => {
    const categoryName = req.body.name
    const sql = `INSERT INTO Categories(name) VALUES ('${categoryName}')`
    con.query(sql, (err, result) => {
        if (err) throw err
        res.json({message : `Category ${categoryName} created`})
    })
}