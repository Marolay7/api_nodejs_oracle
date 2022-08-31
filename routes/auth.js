const express = require('express'),
    router = express.Router(),
    { _create, _findByUsername, _findAll, _update, _delete, _findById } = require('../controllers/usuarios');

router.post('/signup', async (req, res) => {
    try {

        const usuario = await _create(req.body);
        return res.status(201).json({
            status: 'success',
            message: `El usuario ${usuario.nombre} fue creado satisfactoriamente ... `

        });

    } catch (e) {
        return res.status(500).json(e.message);
    }
});

router.post('/bynombre', async (req, res) => {
    try {
        const nombre = await _findByUsername(req.body.nombre);
        return res.status(200).json(nombre);


    } catch (e) {
        return res.status(500).json(e.message);
    }
});

router.post('/byId/:id_user', async (req, res) => {
    try {
        const id = await _findById(req.params.id_user);
        return res.status(200).json(id);

    } catch (e) {
        return res.status(500).json(e.message);
    }
});

router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await _findAll();
        return res.status(200).json(usuarios);


    } catch (e) {
        return res.status(500).json(e.message);
    }
});

router.put('/usuarioedit/:id_user', async (req, res) => {
    try {

        const usuario = await _update(req.body, req.params.id_user);
        return res.status(201).json({
            status: 'success',
            message: `El usuario ${usuario.nombre} fue editado satisfactoriamente ... `

        });

    } catch (e) {
        return res.status(500).json(e.message);
    }
});

router.delete('/usuariodelete/:id_user', async (req, res) => {
    try {

        const usuario = await _delete(req.params.id_user);
        return res.status(201).json({
            status: 'success',
            message: `El usuario fue eliminado satisfactoriamente ... `

        });

    } catch (e) {
        return res.status(500).json(e.message);
    }
});

module.exports = router;
