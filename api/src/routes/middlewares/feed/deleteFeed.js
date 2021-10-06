const { Feed } = require('../../../db.js');


const deleteFeed = async(req,res,next) =>{
    const { feedId } = req.params;
    try {
        await Feed.destroy({
            where:{
                id: feedId
            }
        })
        res.send({success: true});
    } catch (error) {
        next(error)
    }
}


module.exports = {
    deleteFeed
}