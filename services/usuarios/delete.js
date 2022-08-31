const db = require('../../models');

async function deleteUsu(id) {
    if (!id) throw new Error('Id de usuario no dado');
    return await db.usuario.destroy({
        where: {
            id_user: id
        }
    });

}

module.exports = {
    deleteUsu
}