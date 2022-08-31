const db = require('../../models');

async function findAll() {
    const usuario = await db.usuario.findAll();
    if (!usuario) throw new Error('No hay usuarios');
    return usuario;
}

// Find all users
// const users = await User.findAll();
// console.log(users.every(user => user instanceof User)); // true
// console.log("All users:", JSON.stringify(users, null, 2));

module.exports = {
    findAll
}