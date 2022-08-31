const db = require('../../models');

async function findByUsername(nombre) {
    if (!nombre) throw new Error('Nombre de usuario no dado');
    return await db.usuario.findOne({
        where: {
            nombre
        }
    });
}

module.exports = {
    findByUsername
}