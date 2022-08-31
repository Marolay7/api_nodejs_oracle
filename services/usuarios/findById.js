const db = require('../../models');

async function findById(id_user){
    if(!id_user) throw new Error('ID de usuario no dado');
    return await db.usuario.findOne({
        where:{
            id_user
        }
    });
}


module.exports={
    findById
}