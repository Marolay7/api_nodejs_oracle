const db = require('../../models');
const bcrypt = require('bcrypt');

async function update(usuario, id) {
    if (!id) throw new Error('Id de usuario no dado');
    usuario.password = '123456'
    return await db.usuario.update(
        {
            ...usuario,
            password: bcrypt.hashSync(usuario.password, 10),
        },
        {
            where: {
                id_user: id
            }
        });

}

module.exports = {
    update
}