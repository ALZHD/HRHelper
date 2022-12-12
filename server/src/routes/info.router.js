const { Router } = require('express');
const infoController = require('../controllers/info.controller');
// const checkAuth = require('../middlewares/checkAuth');
// const checkAuthor = require('../middlewares/checkAuthor');

const infoRouter = new Router();

infoRouter.get('/showinfo', infoController.showInfo);
infoRouter.post('/getinfo', infoController.getInfo);
infoRouter.delete('/:id', infoController.deleteInfo);

module.exports = infoRouter;
