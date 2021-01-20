import { con } from "../../config/dbConnection"

export const deleteCategory = (req, res) => {
    const categoryId = req.params.id
    const sql=`DELETE FROM Categories WHERE id=${categoryId}`
    con.query(sql, (error, result) => {
        if(error){
            switch (error.errno) {
                case 1451:
                    res.json({message : "Can not delete this category because it is referenced to"})
                    break;
                default:
                    res.json(error.sqlMessage)
                    break;
            }
        }else{
            res.json({message : `Category with ${categoryId} id deleted`})
        }
    })
}