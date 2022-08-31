const { create } = require('../services/usuarios/create');
const { findByUsername } = require('../services/usuarios/find');
const { findAll } = require('../services/usuarios/findAll');
const { update } = require('../services/usuarios/update');
const { deleteUsu } = require('../services/usuarios/delete');
const { findById } = require('../services/usuarios/findById');



async function _create(usuario) {
    return await create(usuario);
}

async function _update(usuario, id) {
    return await update(usuario, id);
}

async function _delete(id) {
    return await deleteUsu(id);
}

async function _findByUsername(nombre) {
    return await findByUsername(nombre);
}

async function _findById(id) {
    return await findById(id);
}

async function _findAll() {
    return await findAll();
}

module.exports = {
    _create, _findByUsername, _findAll, _update, _delete, _findById
}