const db = require('../../models');
const bcrypt = require('bcrypt');

async function create(usuario) {
    if (!usuario.nombre) throw new Error('Nombre de usuario no dado...');
    if (!usuario.telefono) throw new Error('Telefono de usuario no dado...');
    if (!usuario.fecha_nac) throw new Error('Fecha nacimiento de usuario no dado...');
    if (!usuario.descripcion) throw new Error('Descripcion de usuario no dado...');
    if (!usuario.password) throw new Error('Password de usuario no dado...');

    return await db.usuario.create({
        ...usuario,
        password: bcrypt.hashSync(usuario.password, 10)
    });

}

module.exports = {
    create
}